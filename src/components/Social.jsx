import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-6 flex gap-4 *:hover-effect *:duration-500 *:border *:border-[#315779] *:cursor-pointer *:size-[40px] *:rounded-full *:bg-[#0E161E] *:text-white *:flex *:justify-center *:items-center ">
      <div>
        <FaFacebook></FaFacebook>
      </div>
      <div>
        <FaLinkedinIn></FaLinkedinIn>
      </div>
      <div>
        <FaTwitter></FaTwitter>
      </div>
      <div>
        <FaInstagram></FaInstagram>
      </div>
      <div>
        <FaGithub></FaGithub>
      </div>
    </div>
  );
};

export default Social;
