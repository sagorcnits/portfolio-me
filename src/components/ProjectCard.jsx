import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="p-4 border rounded-md border-[#315779] cursor-pointer bg-[#0E161E] project-card">
      <div className="relative">
        <img
          className="rounded-md"
          src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1719073660~exp=1719077260~hmac=ade3c38c95667ba1bae8f5660d954d0b551560ecfb9945f122ba3c94594fb41b&w=740"
          alt=""
        />
        <div className="absolute bg-black opacity-[0.9] top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[30px] text-white duration-500 effect-card ">
          <Link to="/project-details">
            {" "}
            <span className="size-14 rounded-full bg-bgColor flex justify-center items-center bg-[#0E161E] hover:bg-orange-500 duration-500 hover:text-white text-[20px] font-Inter font-bold">
              <IoEye></IoEye>
            </span>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-center russo-one gr-sonali pt-3 text-[30px]">
          Bistro Boss
        </p>
        <p className="text-green-500 font-outfit">
          <Link to="https://blood-unity-bf5e3.web.app/">Preview</Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
