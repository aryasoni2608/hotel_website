import React from 'react';
import Card from './elements/Card';

const Pricing = () => {
  return (
  <div className='w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4'>
       <Card
        imageText='Sydney'
        textColor='text-white'
        h1Text='See More'
        bgImage='bg-hotel1'
       />
       <Card
         imageText='Los Angeles'
         textColor='text-white'
         h1Text='See More'
         bgImage='bg-hotel2'
       />
       <Card
         imageText='Dubai'
         textColor='text-white'
         h1Text='See More'
         bgImage='bg-hotel3'
       />
       <Card
         imageText='Paris'
         textColor='text-white'
         h1Text='See More'
         bgImage='bg-hotel4'
       />
  </div>
  );
};

export default Pricing;