import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Social from "../../components/Social";
import TinyBanner from "../../components/TinyBanner";

const ProjectDetails = () => {
  return (
    <div>
       <Helmet>
        <title>sagor - projectDetails</title>
      </Helmet>
      <TinyBanner info={{ title: "project Details" }}></TinyBanner>
      <div className="flex flex-col md:flex-row gap-6 *:flex-1 max-w-6xl mx-auto mt-10">
        <div className="rounded-md overflow-hidden">
          <img
            className="h-full"
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1719224360~exp=1719227960~hmac=dbc49db741591606e7e5636ec8c17de8eec64aa713ce11df32c63fb4ec5e7dff&w=740"
            alt=""
          />
        </div>
        <div className="text-white font-outfit">
          <h1>
            <span className="text-green-500"> Website Name : </span> Bistro Boss
          </h1>
          <h1 className="py-3 border-b border-sonali border-dashed">
            <span className="text-green-500"> Feature of This Site : </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            facere fuga ipsum quas est, inventore error sequi, architecto dolore
            debitis officiis corrupti ad culpa ea exercitationem. Unde
            doloremque perferendis consequatur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus facere fuga ipsum quas est,
            inventore error sequi, architecto dolore debitis officiis corrupti
            ad culpa ea exercitationem. Unde doloremque perferendis consequatur!
          </h1>
          <h1 className="py-3">
            {" "}
            <span className="text-green-500"> Technology using : </span> html,
            css, tailwind css, javascript, react js , express js, mongoDB
          </h1>
          <h1>
            <span className="text-green-500">Live Link : </span>
            <Link to="https://product-pivot.web.app" target="_blank">
              https://product-pivot.web.app
            </Link>
          </h1>
          <div className="mt-4">
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
