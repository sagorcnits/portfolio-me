import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AboutMe from "../pages/about/AboutMe";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import Projects from "../pages/projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/projects",
        element: <Projects></Projects>,
      },

      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/project-details",
        element: <ProjectDetails></ProjectDetails>,
      },

     
    ],
  },
]);

export default router;
