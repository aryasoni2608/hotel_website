import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox';

const Reservation = () => {
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
                    value='Account Number'
                    placeValue='99 9999 99999 999'
                    />
                    <InputBox
                    value='Phone Number'
                    placeValue='+1 99 99 9999 9999 '
                    />

                    <div>
                        <CustomBtn
                        children='Make Reservation'
                        />
                    </div>

        </div>
    </div>
  );
};

export default Reservation;