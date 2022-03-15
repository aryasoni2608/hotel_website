import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from './elements/CustomBtn';
import InputBox from './elements/InputBox';

const Login = () => {
  return (
  <div className='w-full h-screen bg-black flex items-center justify-center'>
      <Link to='/'  className='absolute text-white uppercase left-1 top-1'>Home</Link>

      <div className='w-2/4 text-center uppercase'>


            <InputBox
            value='Email'
            placeValue='niko@good.com'
            />
            <InputBox
            
            value='Password'
            placeValue='Password'
            type='password'
            />

            <CustomBtn
                children='Login'
                btnPadding='mt-4'
            />

      </div>

  </div>
  );
};

export default Login;