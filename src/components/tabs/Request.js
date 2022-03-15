import React from 'react';
import CustomBtn from '../elements/CustomBtn';
import InputBox from '../elements/InputBox';

const Request = () => {
  return (
    <div className='p-6'>
        <div className='flex flex-col gap-4 items-start w-full md:w-2/4 justify-center'>

            <InputBox
            value='Email'
            placeValue='niko@good.com'
            />

        <CustomBtn
        children='Request Info'
        />

        </div>
    </div>
  );
};

export default Request;