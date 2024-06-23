import { Link } from "react-router-dom";
import webImg from "../../assets/images/WEB DEVELOPMENT.png";

const Footer = () => {
  return (
    <footer className="banner mt-20 px-10 max-w-6xl mx-auto  ">
      <img className="w-[30%]" src={webImg} alt="" />
      <div className=" border-b border-sonali border-dashed">
        <div className="flex items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="57"
            viewBox="0 0 53 57"
            fill="none"
          >
            <path
              d="M27.3723 0H53V28.6885L27.3723 0ZM0.249216 16.8362H0C0 11.0845 1.55068 6.84056 4.65204 4.10434C7.7534 1.36811 12.53 0 18.982 0L53 41.6297C53 47.158 51.5185 51.1087 48.5556 53.482C45.6758 55.7994 40.9684 56.9581 34.4334 56.9581L0.249216 16.8362ZM0.124608 28.144L24.797 57H0.124608V28.144Z"
              fill="url(#paint0_linear_6_42)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6_42"
                x1="-1.43112e-07"
                y1="28"
                x2="53"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9F7B0F" />
                <stop offset="1" stopColor="#FAD76B" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="font-bold text-sonali">Sagor Hossain</h1>
        </div>
        <div className="flex justify-end">
          <img className="w-[30%]" src={webImg} alt="" />
        </div>
        <div className="flex items-center justify-center gap-2 text-white font-outfit py-4">
          <Link
            to="https://www.facebook.com/profile.php?id=100075240488312"
            target="_blank"
            className="hover:gr-sonali duration-500"
          >
            Facebook
          </Link>
          <Link
            to="https://github.com/sagorcnits"
            target="_blank"
            className="hover:gr-sonali duration-500"
          >
            Github
          </Link>
          <Link
            to="https://www.linkedin.com/in/sagor-hossain-web-dev/"
            target="_blank"
            className="hover:gr-sonali duration-500"
          >
            Linkedin
          </Link>
          <Link
            to="https://x.com/SagorHossainWD"
            target="_blank"
            className="hover:gr-sonali duration-500"
          >
            Twitter
          </Link>
          <Link
            to="https://www.instagram.com/sagor.cnits/"
            target="_blank"
            className="hover:gr-sonali duration-500"
          >
            Instagram
          </Link>
        </div>
      </div>

      <h1 className="text-center py-4 text-white font-outfit">
        {" "}
        © Developer Portfolio by{" "}
        <span className="text-green-500">Sagor Hossain</span>
      </h1>
    </footer>
  );
};

export default Footer;
