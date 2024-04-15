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
        <div className='mt-10'>
            <h1 className="text-5xl text-center">Book your perfect Venue! <br /><span className='text-right'> We have Many Options!</span></h1>
            <div className=' mt-10 grid lg:grid-cols-3 gap-6'>
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