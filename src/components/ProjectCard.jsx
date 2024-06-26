import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 border rounded-md border-[#315779] cursor-pointer bg-[#0E161E] project-card">
      <div className="relative">
       <div className="h-[200px] bg-no-repeat bg-cover rounded-md" style={{backgroundImage:`url(${project.image})`}}>
       {/* <img className="rounded-md h-full w-full" src={project.image} alt="" /> */}
       </div>
        <div className="absolute bg-black opacity-[0.9] top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[30px] text-white duration-500 effect-card">
          <Link to={project.project_url} target="_blank">
            {" "}
            <span className="size-14 rounded-full bg-bgColor flex justify-center items-center bg-[#0E161E] hover:bg-orange-500 duration-500 hover:text-white text-[20px] font-Inter font-bold">
              <IoEye></IoEye>
            </span>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-center russo-one gr-sonali pt-3 text-[22px] lg:text-[30px]">
          {project.name}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
