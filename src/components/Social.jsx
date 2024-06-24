import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className=" flex gap-4 *:hover-effect *:duration-500 *:border *:border-[#315779] *:cursor-pointer *:size-[40px] *:rounded-full *:bg-[#0E161E] *:text-white *:flex *:justify-center *:items-center ">
      <Link
        to="https://www.facebook.com/profile.php?id=100075240488312"
        target="_blank"
      >
        <FaFacebook></FaFacebook>
      </Link>

      <Link
        to="https://www.linkedin.com/in/sagor-hossain-web-dev/"
        target="_blank"
      >
        <FaLinkedinIn></FaLinkedinIn>{" "}
      </Link>

      <Link to="https://x.com/SagorHossainWD" target="_blank">
        <FaTwitter></FaTwitter>
      </Link>

      <Link to="https://www.instagram.com/sagor.cnits/" target="_blank">
        <FaInstagram></FaInstagram>
      </Link>

      <Link to="https://github.com/sagorcnits" target="_blank">
        <FaGithub></FaGithub>
      </Link>
    </div>
  );
};

export default Social;
