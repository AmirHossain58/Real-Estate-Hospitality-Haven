import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";


const CardDetails = () => {
    const [data1 ,setData2]=useState({})
    const allData=useLoaderData()
    const{id}=useParams()
    const idNum=parseInt(id)
    useEffect(()=>{
        if(allData.length>0){
          const data=allData?.find(d=>d.id===idNum)
        setData2(data)
        }
         
      },[])
      const{image,location,price,status,facilities,estate_title,description,area
      }=data1
    return (
        <div>
            <Navbar></Navbar>
        <div className='container mx-auto my-10'>
            <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h1" className='font-bold' color="blue-gray">
          {estate_title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">{description}
        Indulge in the epitome of luxury with our beachfront paradises, where pristine sands meet crystal-clear waters, and every amenity is at your fingertips. Experience the tranquility of the mountains in our cozy lodges, offering stunning vistas and unparalleled serenity. Or immerse yourself in the vibrant energy of the city with our chic urban hotels, where modern sophistication meets exceptional service.

        Whether you are seeking a romantic getaway, a family retreat, or an adventure-filled vacation, Hospitality Haven has the perfect property for you. Discover the worlds most luxurious destinations and create unforgettable memories with us. Welcome to Hospitality Haven, your gateway to extraordinary hospitality experiences.
        </Typography>
        <div className='flex justify-between font-bold  my-2'>
       <Typography color="blue-gray">
       Location: {location}
        </Typography>
        <Typography color="blue-gray">
         Area: {area}
        </Typography>
       </div>
       <div className='flex justify-between font-bold my-2'>
       <Typography color="blue-gray">
       Status: {status}
        </Typography>
        <Typography color="blue-gray">
        Price: {price}
        </Typography>
       </div>
      {
        description && <Typography color="blue-gray" className='font-semibold'>
        Facilities :  
         <ul className='list'>
           <li className='ml-2'>1. {facilities[0]}</li>
           <li className='ml-2'>2. {facilities[1]}</li>
           <li  className='ml-2'>3. {facilities[2]}</li>
          
         </ul>
        </Typography>
      }
      </CardBody>
      <CardFooter className="flex items-center justify-center mt-4 mb-4">
      <button
        className="select-none rounded-lg bg-red-500 py-3 px-12 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
       Book now
      </button>
      </CardFooter>
    </Card>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default CardDetails;