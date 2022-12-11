import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState();
    useEffect( () => {
        fetch('https://grsagor-portfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, []);

    return (
        <div id='projects' className='bg-base-200 p-4 m-2 rounded-lg'>
            <h2 className='text-3xl mb-4'>My Projects</h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        projects?.map(project => <div className='mx-auto'>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={project.thumbnail} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{project.title}</h2>
                                    <ul className='list-disc text-justify ml-4'>
                                        {
                                            project?.shortDescriptions?.map(shortDescription => <li>
                                                {shortDescription}
                                            </li>)
                                        }
                                    </ul>
                                    <div className='flex justify-between'>
                                        <div className="card-actions">
                                            <a href={project.live} alt="" target='_blank' rel="noreferrer"><button className="btn glass">Visit Website</button></a>
                                        </div>
                                        <div className="card-actions">
                                            <Link to={`/project/${project._id}`}><button className="btn">See Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;