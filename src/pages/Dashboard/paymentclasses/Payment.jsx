import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import UseSelected from '../../../hooks/UseSelected';
import { useParams } from 'react-router-dom';
import CheckOut from './CheckOut';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    const [selectclass, refetch] = UseSelected();
    const {id} = useParams();
    const  enrolclass = selectclass.find( thisclass => thisclass._id === id);
    return (
        <div>
        <Elements stripe={stripePromise}>
            <CheckOut enrolclass={enrolclass}></CheckOut>
        </Elements>
    </div>
    );
};

export default Payment;