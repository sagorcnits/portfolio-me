import { FaDownload } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import officialImg from "../../assets/images/sagor-official.png";
import Social from "../../components/Social";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 banner py-10 flex flex-col-reverse lg:flex-row items-center ">
      <div className="mt-10 lg:mt-0 ">
        <h1 className="text-sonali flex items-center gap-2">
          Hello There{" "}
          <span className="text-white text-[30px]">
            <MdWavingHand></MdWavingHand>
          </span>
        </h1>
        <h1 className="russo-one text-white text-[30px] md:text-[40px]">
          I’ m Sagor Hossain
        </h1>
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
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <stop stopColor="#FAD76B" />
                <stop offset="1" stopColor="#FAD76B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_196_2"
                x1="192"
                y1="87.0006"
                x2="93"
                y2="87.0006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAD76B" />
                <stop offset="1" stopColor="#FAD76B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_196_2"
                x1="192"
                y1="53.0006"
                x2="60"
                y2="53.0006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAD76B" />
                <stop offset="1" stopColor="#FAD76B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="russo-one text-[25px] md:text-[35px] gr-sonali text-balance">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
                "Junior Fullstack Developer",
              ]}
              loop={true}
            ></Typewriter>
          </div>
        </div>
        <p className="font-outfit  text-white">
          The combination of my passion for design and code.
        </p>
        <Social></Social>
        <div className="flex items-center gap-4">
          <button className="button px-2 mt-6 font-semibold flex items-center gap-2">
            Contact Me <RiContactsFill></RiContactsFill>
          </button>
          <button className="button px-2 mt-6 font-semibold flex items-center gap-2">
            Download Resume <FaDownload></FaDownload>
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end ">
        <div className="md:w-[560px]  rounded-lg overflow-hidden  border border-[#315779] relative">
          <div className="flex justify-between items-center  border-b border-[#315779] p-4">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full bg-green-500"></div>
              <div className="size-4 rounded-full bg-orange-500"></div>
              <div className="size-4 rounded-full bg-yellow-500"></div>
            </div>
            <div className="size-[30px] rounded-full overflow-hidden">
              <img src={officialImg} alt="" />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white">
              <span className="text-[#C70039]">const </span>{" "}
              <span className="text-[#4cf183]">programmer </span>
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
                <span className="text-sonali">{`' Express JS '`}</span> ,{" "}
                <span className="text-sonali">{`' MongoDB '`}</span>
                {" ] "},
              </span>{" "}
              <br />
              <span className="ml-6 ">
                hardWorker : <span className="text-[#4cf183]">true</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
                quickLearner : <span className="text-[#4cf183]">true</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
                location :{" "}
                <span className="text-sonali">{`' Pabna, Bangladesh '`}</span>,
              </span>{" "}
              <br />
              <span className="ml-6 ">
                hireable : <span className="text-[#4cf183]">{` ( ) => `}</span>{" "}
                <span className="text-[#736F6E] text-[20px]"> {" {"}</span>
              </span>{" "}
              <br />
              <span className="ml-14 text-[#C70039]">if</span>{" "}
              <span className="text-[#4cf183]">{`( your need === 'MERN' )`}</span>{" "}
              <span className="text-[#736F6E] text-[20px]"> {" {"}</span> <br />
              <span className="ml-24 text-[#C70039]">
                return <span className="text-sonali">{`Alright 😍`}</span>
              </span>{" "}
              <br />
              <span className="ml-20 text-[#736F6E] text-[20px]">
                {" "}
                {" }"}
              </span>{" "}
              <span className="text-[#C70039]">{`else`}</span>{" "}
              <span className="text-[#736F6E] text-[20px]"> {" {"}</span> <br />
              <span className="ml-24 text-[#C70039]">
                return <span className="text-sonali">{`Sorry 😢`}</span>
              </span>
              <br />
              <span className="ml-24 text-[#736F6E] text-[20px]"> {" }"}</span>
              <br />
              <span className="ml-14 text-[#736F6E] text-[20px]">
                {" "}
                {" }"}
              </span>{" "}
              <br />
              <span className="ml-6 text-[#736F6E] text-[20px]">
                {" "}
                {" }"}
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
