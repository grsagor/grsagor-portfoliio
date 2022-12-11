import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import ProjectDetails from "../../Pages/Home/Projects/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project/:id',
                loader: async ({params}) => {
                    return fetch(`https://grsagor-portfolio-server.vercel.app/project/${params.id}`)
                },
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/blogs',
                loader: async () => {
                    return fetch('https://grsagor-portfolio-server.vercel.app/blogs');
                },
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;