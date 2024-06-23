import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AboutMe from "../pages/about/AboutMe";
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/Home";
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
    ],
  },
]);

export default router;
