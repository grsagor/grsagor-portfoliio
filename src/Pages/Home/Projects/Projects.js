import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='bg-base-200 p-4 m-2'>
            <h2 className='text-3xl mb-4'>My Projects</h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Book Shop</h2>
                            <ul className='list-disc text-justify'>
                                <li>In this website, I have successfully explored different dashboard interface for users with different role where they are able to do different activities based on their role.</li>
                                <li className='mt-2'>Users can add images directly and the pictures will be store into a medium and a link of the image will be stored into database.</li>
                                <li className="mt-2">A special feature of verified users has explored in this website where the authority can verify a user and some action also made on this feature such as showing blue tick with the verified users.</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://assignment-12-49fd8.web.app/" target="_blank" rel="noreferrer">Visit Website</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">University Of Music</h2>
                            <ul className='list-disc text-justify'>
                                <li>A very necessary react component named react-photo-viewer has used in this website where the thumbnails will be shown vastly when it will be clicked.</li>
                                <li className='mt-2'>On the website, all the features of CRUD operation have used nicely where user can add data into the database and load data from server. Deleting data from server and editing data also explored.</li>
                                <li className="mt-2">A short feature of pagination named limit() is used in this website to show limited number of data in a specific component and the data is called in ascending order.</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://assignment-11-c14cb.web.app/" target="_blank" rel="noreferrer">Visit Website</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">C School</h2>
                            <ul className='list-disc text-justify'>
                                <li>React route and layout used, that is why when a user clicks any tutorial, he/she can see the details in the outlet/right side of the website.</li>
                                <li className='mt-2'>Toggle button explored in this website, when a user clicks the button, it will change to turned on to turn off or turn off to turn on button.</li>
                                <li className="mt-2">Three types of login system implemented, they are Email and Password login, Google login and GitHub login.</li>
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="https://assignment-10-40242.web.app/" target="_blank" rel="noreferrer">Visit Website</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;