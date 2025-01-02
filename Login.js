"use client";
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import Register from '../Register';

export default function Login(){
  // const [email, setEmail] = useState('');
  //  const [password, setPassword] =useState('');
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form reload
      try {
        const response = await fetch("http://localhost:5500/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          setMessage(data.message);
        } else {
          setMessage(data.error);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("An error occurred. Please try again.");
      }
    }
    
    return(
        <div>
        <div>  </div>
        {/* <!-- */}
  {/* This example requires updating your template: */}

  {/* ``` */}
  {/* <html className="h-full bg-white"> */}
  {/* <body className="h-full"> */}
  {/* ``` */}
{/* --> */}
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleLogin} >
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                     
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
      {message}
      </p>
          )}

    <p className="mt-10 text-center text-sm/6 text-gray-500">
       Don't have an account? 
      <Link className="font-semibold text-indigo-600 hover:text-indigo-500" to="/register"> Register</Link>
    </p>
  </div>
</div>

      </div>
  

      
    );
  }