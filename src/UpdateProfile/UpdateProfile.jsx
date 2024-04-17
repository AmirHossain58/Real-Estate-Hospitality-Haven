import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
import {
    Card,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from "react-hook-form"

const UpdateProfile = () => {
  const{updateUserProfile,user,loading}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  if(loading){
    return <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <svg className="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path
        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
        stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
      </path>
    </svg>
  </div>
  }

  const onSubmit = (data) =>{
    console.log(data);
    console.log(user)
      updateUserProfile(data.name,data.photo)
      .then()
      .catch()
      
    
  }

  
    return (
        <div>
             <Helmet>
            <title>Hospitality Haven | Update Profile</title>
          </Helmet>
          <Navbar></Navbar>

          <div className='container mx-auto flex justify-center my-10'>
          <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
      Update Profile
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form 
onSubmit={handleSubmit(onSubmit)}      className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            
            placeholder={user.displayName}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your PhotoURL
          </Typography>
          <Input
            size="lg"
            placeholder={user.photoURL}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("photo")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder={user.email}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
        </div>
        <button type='submit' className='btn'>Update Profile</button>
      </form>
         </Card>
          </div>



          <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;