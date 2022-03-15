import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox'

const SendMessage = () => {
  return (
     <div className='p-4'>

            <div className='flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-center'>


                    <InputBox
                    value='Name'
                    placeValue='Nico f.e'
                    />
                           <InputBox
                    value='Email'
                    placeValue='niko@good.com'
                    />
                    <InputBox
                    value='Message'
                    placeValue='Hello'
                    />

                <div>
                    <CustomBtn
                    children='Send Message'
                    />
                </div>


            </div>

     </div>
  );
};

export default SendMessage;