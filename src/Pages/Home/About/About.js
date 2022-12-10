import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const About = () => {
    return (
        <div id='about' className='bg-base-200 border rounded mb-2 mx-2'>
            <h2 className='text-3xl m-2'>About</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6'>

                <div className='w-60 mx-auto'>
                    {/* <img className='rounded drop-shadow-2xl' src="formal dp.jpg" alt="" /> */}

                    <PhotoProvider>
                        <PhotoView src="formal dp.jpg">
                            <img className='rounded drop-shadow-2xl' src="formal dp.jpg" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='flex justify-center items-center col-span-2'>
                    <div>
                        <p className='text-justify'>Hello! This is 
                        <span className='font-bold'> Golam Rahman Sagor </span> 
                        and I love creating website and implementing new ideas into websites. Though I am a student with Computer Science and Engineering background but from the first day I was not interested in programming. I started learning
                        <span className='font-bold'> MERN Stact web developing </span>
                        from 2022. <br /><br /> Recently, I have finished my Bachelor degree at the department of<span className='font-bold'> Computer Science & Engineering </span>from<span className='font-bold'> Stamford University Bangladesh.</span></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;