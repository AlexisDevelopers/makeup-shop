import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import '../styles/Newsletter.css';

const Newsletter = () => {
    return (
        <div className='container-newsletter'>
            <h1 className='title-newsletter'>Newsletter</h1>
            <div className='desc-newsletter'>FIND OUT WHAT IS TRENDY, FASHIONABLE AND NEW THAT THE VIUSHOP HAS FOR YOU.</div>
            <div className='inputContainer-newsletter'>
                <input className='input-newsletter' placeholder='Your email' />
                <button className='btnSend-newsletter'>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter
