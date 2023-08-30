import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const [open,setOpen] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit,formState: { errors }} = useForm();
  const [error, setError] = useState("");
 const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [showPass, setShowPass] = useState(true);


  const onSubmit = data =>{
     console.log(data);
     signIn(data.email,data.password)
     .then(result => {
         const user = result.user;
        //  console.log(user);
        setError("");
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successfully!!',
            showConfirmButton: false,
            timer: 1500
         });
         navigate(from, { replace: true });
     })
     .catch(error => setError(error.message))
  }
 
  const toggle = () =>{
    setOpen(!open)
  }

    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
      }
      else {
          setDisabled(true)
      }
  }

  
  
      return (
        <div className="hero min-h-screen bg-base-200">
           <Helmet>
        <title>NotoCard || Login</title>
      </Helmet>
      <div className="my-8 mx-20">
            <div className="grid grid-cols-2 gap-8">
            <img src="https://i.ibb.co/xHzCjGR/access-control-system-abstract-concept-335657-3180.jpg"/>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-[#1597a8] text-3xl font-bold">Login now!!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered lg:w-[296px] text-black" />
                            </div>
                            <div className="my-1 text-left">
                                {errors.email && <span className="text-red-600 ">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="input-group pr-5">
                                    <input type={showPass === true ? "password" : "text"} {...register("password", { required: true })} placeholder="password" className="input input-bordered text-black" />
                                    <button onClick={() => { setShowPass(!showPass) }} className="btn btn-square text-2xl">
                                        {showPass === true ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

                                    </button>
                                </div>

                                <div className="my-1 text-left">
                                    {errors.password && <span className="text-red-600 ">Password is required</span>}
                                </div>
                            </div>
                            {
                                error && <small className="text-red-600">{error}</small>
                            }
                            <div className="form-control mt-6">
                                <input className="btn bg-[#1ed8f0] hover:bg-[#1bc2d8] lg:w-[296px]" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="text-[#1597a8]">Dont have an account? Go to <Link className="text-[#0f6c78] font-semibold" to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
  };

export default Login;

