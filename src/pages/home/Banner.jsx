import { FaDownload } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
// import bannerImg from "../../assets/images/sagor-about.jpg";
const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 banner py-10 flex items-center">
      <div>
        <h1 className="text-sonali flex items-center gap-2">
          Hello There{" "}
          <span className="text-white text-[30px]">
            <MdWavingHand></MdWavingHand>
          </span>
        </h1>
        <h1 className="russo-one text-white text-[40px]">I’ m Sagor Hossain</h1>
        <div className="flex  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="100"
            viewBox="0 0 229 138"
            fill="none"
          >
            <g filter="url(#filter0_d_196_2)">
              <path
                d="M192 32C192 30.8954 192.895 30 194 30H195V108H194C192.895 108 192 107.105 192 106V32Z"
                fill="#FAD76B"
              />
            </g>
            <rect
              y="68"
              width="192"
              height="2"
              fill="url(#paint0_linear_196_2)"
            />
            <rect
              x="93"
              y="85"
              width="99"
              height="2"
              fill="url(#paint1_linear_196_2)"
            />
            <rect
              x="60"
              y="51"
              width="132"
              height="2"
              fill="url(#paint2_linear_196_2)"
            />
            <defs>
              <filter
                id="filter0_d_196_2"
                x="166"
                y="0"
                width="63"
                height="138"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.576471 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_196_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_196_2"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_196_2"
                x1="192"
                y1="70.0006"
                x2="0"
                y2="70.0006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAD76B" />
                <stop offset="1" stop-color="#FAD76B" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_196_2"
                x1="192"
                y1="87.0006"
                x2="93"
                y2="87.0006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAD76B" />
                <stop offset="1" stop-color="#FAD76B" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_196_2"
                x1="192"
                y1="53.0006"
                x2="60"
                y2="53.0006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAD76B" />
                <stop offset="1" stop-color="#FAD76B" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="russo-one text-[35px] gr-sonali">Developer</h1>
        </div>
        <p className="font-outfit  text-white">
          The combination of my passion for design and code.
        </p>
        <button className="button px-2 mt-6 font-semibold flex items-center gap-2">
          Download Resume <FaDownload></FaDownload>
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-[560px] h-[400px] rounded-lg overflow-hidden  border border-[#0A0E37]">
          {/* <img
            className="w-full scale-[2] brightness-[0.24] hover:brightness-100 duration-500"
            src={bannerImg}
            alt=""
          /> */}

          <div className="flex items-center gap-2 p-4 border-b border-[#312E81]">
            <div className="size-4 rounded-full bg-green-500"></div>
            <div className="size-4 rounded-full bg-orange-500"></div>
            <div className="size-4 rounded-full bg-yellow-500"></div>
          </div>
          <div className="p-4">
            <p className="text-white">
              <span className="text-[#C70039]">const </span> coder{" "}
              <span className="text-sonali"> = </span>
              <span className="text-[#736F6E] text-[20px]"> {" {"}</span> <br />
              <span className="ml-6 ">
                name :{" "}
                <span className="text-sonali">{`' Sagor Hossain '`}</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
                skills : <span>{" [ "}</span>
                <span className="text-sonali">{`' React JS '`}</span> ,{" "}
                <span className="text-sonali">{`' Next JS '`}</span> ,{" "}
                <span className="text-sonali">{`' Redux '`}</span> ,{" "}
                <span className="text-sonali">{`' MongoDB '`}</span> ,{" "}
                <span className="text-sonali">{`' Express JS '`}</span>   
                {" ] "},
              </span>{" "}
              <br />
              <span className="ml-6 ">
              hardWorker :{" "}
                <span className="text-[#4cf183]">true</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
              quickLearner :{" "}
                <span className="text-[#4cf183]">true</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
              problemSolver :{" "}
                <span className="text-[#4cf183]">true</span>,
              </span>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
