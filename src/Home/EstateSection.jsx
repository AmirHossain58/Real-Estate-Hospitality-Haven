import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const EstateSection = () => {
    const [cards,setCards]=useState([])
   useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=>setCards(data))
   },[])
    return (
        <div className=' mt-4 md:mt-10'>
            <h1 className="text-2xl md:text-5xl text-center">Book your perfect Venue! <br /><span className='text-right'> We have Many Options!</span></h1>
            <div className='md:mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6'>
                {
                    cards.map(card=><Cards 
                    key={card.id}
                    card={card}
                    ></Cards>)
                }
            </div>
        </div>
    );
};

export default EstateSection;