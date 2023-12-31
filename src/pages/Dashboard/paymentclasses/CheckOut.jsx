import React, { useEffect } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useState } from 'react';
import UseAuth from '../../../hooks/UseAuth';
import './Checkout.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOut = ({ enrolclass}) => {
    const { classname, image, instructoremail, instructorname, price, classid , _id, seats,enroll } = enrolclass || {};
    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth()
    const [axiosSecure] = UseAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', {price} )
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('eror message', error);
            setCardError(error.message);
        } else {
            console.log('paymentMethod', paymentMethod)
            setCardError('');
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                studentNmae: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classname,
                image,
                instructoremail,
                instructorname,
                payid: _id,
                classid,
                seats,
                enroll,
                status: 'enroolpending',
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                    }
                })
        }
    }
    return (
        <div>
        <form className="w-[500px]" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing} >
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </div>
    );
};

export default CheckOut;