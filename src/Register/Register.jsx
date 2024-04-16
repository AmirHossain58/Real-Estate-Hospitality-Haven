import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye,FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from "react-hook-form"
const Register = () => {
    const [show,setShow]=useState(false)
    const [name ,setName]=useState('')
    const [photo ,setPhoto]=useState('')
    const {createUser,setUser,user}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) =>{
        //   console.log(data,data.photo,data.name)
        
        const verifyPassword = (password) => {
            const uppercaseRegex = /[A-Z]/;
            const lowercaseRegex = /[a-z]/;
            const lengthRegex = /^.{6,}$/;
          
            const hasUppercase = uppercaseRegex.test(password);
            const hasLowercase = lowercaseRegex.test(password);
            const hasMinLength = lengthRegex.test(password);
          
            return hasUppercase && hasLowercase && hasMinLength;
          };
          const isValidPassword = verifyPassword(data.password);

            if (isValidPassword) {
                toast.success('Successfully Register')
            // console.log("Password is valid.");
            } else {
            return toast.error("Password Must have an Uppercase,a Lowercase ,Length at least 6 character.");
            }
        setPhoto(data.photo)
        setName(data.name)
        createUser(data.email,data.password)
        .then((r)=>{
        })
        .catch()
    }
    return (
        <div>
            <Navbar 
            name={name}
            photo={photo}
            ></Navbar>

<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
    <div className="text-center">
    <h1 className="text-5xl font-bold">Register now!</h1>
    <p className="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="name" className="input input-bordered" 
        {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo</span>
        </label>
        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" 
        {...register("photo", { required: true })}
        />
        {errors.photo && <span>This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" 
        {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control relative">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type={show?'text':'password'} name='password' placeholder="password" className="input input-bordered" 
        {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        <div onClick={()=>{setShow(!show)}} className='absolute text-2xl right-4 top-[40%]'>
            
            {show?<FaEye />:<FaEyeSlash />}</div>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary uppercase font-bold">Register</button>
        </div>
    </form>
    <p>Do have an account, Please <Link
    className='font-bold text-blue-800 underline' 
    to={'/login'}>Login</Link></p>
    </div>
    <ToastContainer />
</div>
</div>
        </div>
    );
};

export default Register;