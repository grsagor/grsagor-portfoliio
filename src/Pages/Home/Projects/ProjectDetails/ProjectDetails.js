import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { VscLiveShare } from 'react-icons/vsc';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectDetails = () => {
    const project = useLoaderData();
    const { title, imgs, live, client, server, detailDescriptions } = project;
    return (
        <div className='flex justify-center'>
            <div className='bg-base-200 m-2 rounded-lg'>
                <div className='flex justify-between mb-2'>
                    <div>
                        <h2 className='text-3xl m-4'>{title}</h2>
                    </div>
                    <div className='flex gap-2 mr-2'>
                        <div><a href={live} alt="" target='_blank' rel="noreferrer"><button title='Visit Website' className='btn glass p-2 mt-4 border rounded-lg'><VscLiveShare className='text-3xl'></VscLiveShare></button></a></div>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="">
                                <button title='GitHub' className='btn glass p-2 mt-4 border rounded-lg'><FaGithubSquare className='text-3xl'></FaGithubSquare></button>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a href={client} alt="" target='_blank' rel="noreferrer">Client Side</a></li>
                                <li><a href={server} alt="" target='_blank' rel="noreferrer">Server Side</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4'>
                    {
                        imgs?.map(img => <div>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img title='Click on the image to see full screen!' className='h-60 border border-white rounded' src={img} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>)
                    }
                </div>

                <div className='w-3/4 mx-auto my-4'>
                    <h2 className='text-2xl mb-4'>Description</h2>
                    <ui className="text-justify">
                        {
                            detailDescriptions?.map(detailDescription => <li>
                                {detailDescription}
                            </li>)
                        }
                    </ui>
                </div>
                <h2 className='text-2xl text-center mb-4'>That was all about <span className='font-bold'>{title}</span></h2>
            </div>
        </div>
    );
};

export default ProjectDetails;