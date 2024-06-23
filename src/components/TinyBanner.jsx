import { Link } from "react-router-dom";

const TinyBanner = ({info}) => {
  return (
    <div className="banner h-[300px] mt-16 flex justify-center items-center relative overflow-hidden">
      <div className="flex items-center justify-around md:w-[55%] ">
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
        <div>
          <h1 className="russo-one gr-sonali text-[22px] md:text-[30px] ">{info.title}</h1>
          <div className="text-white font-outfit">
            <Link to="/" className="text-green-500 ">Home</Link> / {info.title}
          </div>
        </div>
        <svg
          className="rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="110"
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
      </div>
      <div className="absolute -left-10 -bottom-2 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="241"
          height="150"
          viewBox="0 0 338 190"
          fill="none"
        >
          <path
            d="M-5.46392e-06 65L-8.30516e-06 0L338 125L338 190L-5.46392e-06 65Z"
            fill="#FAD76B"
            fillOpacity="0.05"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="241"
          height="150"
          viewBox="0 0 338 190"
          fill="none"
        >
          <path
            d="M-5.46392e-06 65L-8.30516e-06 0L338 125L338 190L-5.46392e-06 65Z"
            fill="#FAD76B"
            fillOpacity="0.05"
          />
        </svg>
      </div>
      <div className="absolute -right-10 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="241"
          height="150"
          viewBox="0 0 241 190"
          fill="none"
        >
          <path
            d="M241 65L241 0L2.84124e-06 125L0 190L241 65Z"
            fill="#FAD76B"
            fillOpacity="0.05"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="241"
          height="150"
          viewBox="0 0 241 190"
          fill="none"
        >
          <path
            d="M241 65L241 0L2.84124e-06 125L0 190L241 65Z"
            fill="#FAD76B"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </div>
  );
};

export default TinyBanner;
