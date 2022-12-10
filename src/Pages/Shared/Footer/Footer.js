import React from 'react';
import Email from '../../Home/Email/Email';

const Footer = () => {
    return (
        <div className='bg-base-200 pb-4 m-2'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex felx-center items-center'>
                    <div className='w-3/4 mx-auto text-2xl'>Looking for an opportunity. If you have any idea or Freelance Project, my inbox is always open. As well as if you have any query or advice please share with me.</div>
                </div>
                <div>
                    <Email></Email>
                </div>
            </div>
            <div id='links'>

            </div>
        </div>
    );
};

export default Footer;