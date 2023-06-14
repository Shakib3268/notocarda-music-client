import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {
  const { register, handleSubmit, reset,watch, formState: { errors } } = useForm({mode:'onTouched'});
  const { createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    alert(JSON.stringify(data))
    createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email ,image:data.photoURL}
                        fetch('https://notocard-music-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };
  const password = watch('password')

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>NotoCard || SignUp</title>
      </Helmet>
    <div className="hero-content grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
            <img src="https://i.ibb.co/6gNdRG6/account-concept-illustration-114360-399.jpg" alt="" srcset="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"  {...register("password", {
                        required: true,
                        minLength:{
                          value: 8
                        },
                        maxLength:{
                          value: 20
                        },
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password"  {...register("confirmPassword", {
                        required: 'confirm password is required',validate: (value) => value === password || 'password not match'
                    })} placeholder="confirm password" className="input input-bordered" />
                    {errors.confirmPassword?.type === 'required' && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
            <p className='text-center'><small>Already have an account <Link to="/login" className='text-blue-600'>Login</Link></small></p>
            <SocialLogin></SocialLogin>
        </div>
    </div>
</div>
  );
};

export default Signup;