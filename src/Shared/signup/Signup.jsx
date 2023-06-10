import React from 'react';
import { useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
    const { createUser,goggle} = useContext(AuthContext);

    const [error,setError] = useState('')
    const[succes,setSucces] = useState('')
  
    const handleGoggle =() =>{
        goggle()
        .then(result =>{
          const goggleUser =result.user 
          console.log(goggleUser)
        })
        .catch(error =>{
          console.log(error.message)
        })
      }
      
    const handleRegister = (event) => {
      event.preventDefault();
      setSucces('')
      setError('')
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value
      const email = form.email.value;
      const password = form.password.value
      console.log(name,photo, email,password);
      if(password.length < 6){
        setError('Please Add Atleast 6 Character')
        return
      }
      createUser(email,password)
      .then(result => {
        const creatLogged = result.user 
        console.log(creatLogged)
        setError('')
        setSucces('User has Created Succesfully')
        form.reset()
      })
      .catch(error => {
        console.log(error.message)
      })
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-semibold mb-4">Please Register</h1>
          <form onSubmit={handleRegister} className ="">
          <label className ="block text-gray-700 font-bold mb-2">
            Name
          </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" name="name" placeholder="Enter Your Name" required />
            <br />
            <label className ="block text-gray-700 font-bold mb-2">
            Photo
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="photo" type="text" name="photo" placeholder="Enter Your Photo-Url" required/>
            <br />
            <label class="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="text" name="email" placeholder="Enter Your email" required/>
            <br />
          <label class="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input  className ="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" name="password" placeholder="Enter Your password" required />
          <br />
          <label class="block text-gray-700 font-bold mb-2">
           confirm Password
          </label>
          <input  className ="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" name="password" placeholder="Enter Your password" required />
            <br />
            <button className="btn btn-primary">Register</button>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-blue-600 underline" to="/login">
              Login
            </Link>
          </p>
          <p className="text-red-600">{error}</p>
          <p className="text-green-500">{succes}</p>
          <button className='flex items-center bg-blue-400 p-3 m-3 text-xl mb-3' onClick={handleGoggle}> <FaGoogle></FaGoogle><span className='ml-2'>Goggle SignIn</span> </button>
        </div>
      );
    };

export default Signup;