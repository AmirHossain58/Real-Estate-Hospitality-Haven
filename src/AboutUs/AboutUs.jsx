import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className='container mx-auto lg:my-20'>

          <div className='text-center mb-8'>
           <h1 className="text-3xl md:text-5xl font-bold">Think about us</h1><br />
            <p className='text-xl font-medium'>That’s the main thing people are controlled by! Thoughts - their perception of themselves!</p>
           </div >
           <div 
           
           className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div >
          <Card  className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
     <div className='h-[130px] w-[130px] rounded-full overflow-hidden mx-auto'>
     <img
          src="https://www.material-tailwind.com/img/avatar1.jpg"
          alt="ui/ux review check"
        />
     </div>
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h3" color="blue-gray">
        Jessica Devis
        </Typography>
        <Typography variant="lead" className="mt-3 font-normal text-slate-400">CEO @ MARKETING DIGITAL LTD..
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-slate-400">The connections you make at Web Summit are unparalleled, we met users all over the world.
        </Typography>
      </CardBody>
      
             </Card>
          </div>
           <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
     <div className='h-[130px] w-[130px] rounded-full overflow-hidden mx-auto'>
     <img
     className=''
          src="https://www.material-tailwind.com/img/avatar2.jpg"
          alt="ui/ux review check"
        />
     </div>
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h3" color="blue-gray">
        Linde Michel
        </Typography>
        <Typography variant="lead"  className="mt-3 font-normal text-slate-400">MARKETING @ APPLE INC.


        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-slate-400">Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.
        </Typography>
      </CardBody>
      
             </Card>
           <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
     <div className='h-[130px] w-[130px] rounded-full overflow-hidden mx-auto'>
     <img
     className='w-full'
          src="https://www.material-tailwind.com/image/avatar7.svg"
          alt="ui/ux review check"
        />
     </div>
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h3" color="blue-gray">
        Misha Stam
        </Typography>
        <Typography variant="lead" className="mt-3 font-normal text-slate-400">DESIGNER @ APPLE INC.
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-slate-400">The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.
        </Typography>
      </CardBody>
      
             </Card>
           </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default AboutUs;