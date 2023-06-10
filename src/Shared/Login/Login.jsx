import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

const Login = () => {
  const [open,setOpen] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit,formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const onSubmit = data =>{
     console.log(data);
    //  signIn(email,password)
    //  .then(result =>{
    //   const loggedUser = result.user 
    //   console.log(loggedUser)
    //   navigate(from,{replace: true})
    // })
    // .catch(error => {
    //       console.log(error.message)
    //     })
  }
  

  const toggle = () =>{
    setOpen(!open)
  }
  
    // const handleLogin = event =>{
    //   event.preventDefault()
    //   const form = event.target 
    //   const email = form.email.value 
    //   const password = form.password.value 
    //   console.log(email,password)
    //   signIn(email,password)
    //   .then(result =>{
    //     const loggedUser = result.user 
    //     console.log(loggedUser)
    //     navigate(from,{replace: true})
    //   })
    //   .catch(error => {
    //     console.log(error.message)
    //   })
    // }
  

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
        <div className="hero-content grid lg:grid-cols-2 gap-9">
            <div className="text-center">
                <img src="https://i.ibb.co/xHzCjGR/access-control-system-abstract-concept-335657-3180.jpg" alt="" srcset="" />
            </div>
            <div className="card max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       <div className='relative'>
                       <input type={(open === false) ? 'password' : 'text'} placeholder="password" {...register("password")} className="input input-bordered w-full" />
                       <div className='absolute top-4 right-5'>
                        {
                          (open === false) ? <AiFillEye onClick={toggle}></AiFillEye>:<AiFillEyeInvisible onClick={toggle}></AiFillEyeInvisible>
                        }
                       </div>
                       </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'><small>New Here? <Link to="/signup" className='text-blue-300'>Create an account</Link> </small></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
      );
  };

export default Login;