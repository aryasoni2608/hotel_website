import React,{useState} from 'react';
import CustomBtn from './elements/CustomBtn';
import SendMessage from './tabs/SendMessage';
import Request from './tabs/Request';
import Reservation from './tabs/Reservation';


const Information = () => {

  const [tab,setTab] = useState('sendMessage')

  return (
    <div className='w-full min-h-screen bg-info-bg bg-cover bg-center text-white uppercase p-8'>

            <div className=' children:m-4'>


                    <CustomBtn
                    children='Send Message'
                    onClickItem={() => setTab('sendMessage')}
                    />
                    <CustomBtn
                    children='Request Info'
                    onClickItem={() => setTab('requestInfo')}
                    />
                    <CustomBtn
                    children='Make Reservation'
                    onClickItem={() => setTab('makeRes')}
                    />

            </div>

                {tab === 'sendMessage' && <SendMessage/>}
                {tab === 'requestInfo' && <Request/>}
                {tab === 'makeRes' && <Reservation/>}

    </div>  
  );
};

export default Information;