import React from 'react';
import Email from '../../Home/Email/Email';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='pb-4 m-2 border rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex felx-center items-center'>
                    <div className='w-3/4 mx-auto text-2xl'><span className='font-serif'>Looking for an opportunity. If you have any idea or Freelance Project, my inbox is always open. As well as if you have any query or advice please share with me.</span>

                    <br /><br />

                    <h2 className='text-sm'>Follow me on:</h2>

                    <div id='links' className='flex justify-center gap-4 mt-4'>
                        <div><a href="https://www.facebook.com/grsagor.official" target="_blank" rel="noreferrer"><FaFacebookSquare className='text-3xl'></FaFacebookSquare></a></div>
                        <div><a href="https://www.linkedin.com/in/golam-rahman-sagor-937450217/" target="_blank" rel="noreferrer"><ImLinkedin className='text-3xl'></ImLinkedin></a></div>
                        <div><a href="https://github.com/grsagor" target="_blank" rel="noreferrer"><FaGithubSquare className='text-3xl'></FaGithubSquare></a></div>
                    </div>

                    </div>
                </div>
                <div>
                    <Email></Email>
                </div>
            </div>
        </div>
    );
};

export default Footer;