import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='bg-base-200'>
            {
                blogs.length === 0 && <>
                <div className='flex justify-center items-center' style={{height: '85vh'}}>
                    <h2 className='text-9xl my-auto font-serif'>Coming Soon</h2>
                </div>
                </>
            }
        </div>
    );
};

export default Blogs;