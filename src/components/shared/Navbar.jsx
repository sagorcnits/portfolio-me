import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isActive, setActive] = useState(true);
  const navRef = useRef();
  const handleSideBar = () => {
    setActive(!isActive);
    if (isActive) {
      navRef.current.style.left = 0;
    } else {
      navRef.current.style.left = "-300px";
    }
  };
  return (
    <>
      <div className="fixed w-full top-0 bg-[#010A12] z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto border-x border-b rounded-b-[20px] border-sonali px-4 py-2 font-outfit">
          <div className="flex gap-2 items-center">
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
          <div className="hidden md:flex items-center gap-10">
            <ul className="text-white flex items-center gap-10 ">
              <li className="hover:text-[#fad76b] duration-500">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[#fad76b] duration-500">
                <NavLink
                  to="/projects"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="hover:text-[#fad76b] duration-500">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li className="hover:text-[#fad76b] duration-500">
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
            <Link to="/contact">
              <button className="button font-bold">Let’s Talk</button>
            </Link>
          </div>
          <FaBars
            onClick={handleSideBar}
            className="text-white text-[25px] cursor-pointer md:hidden flex"
          ></FaBars>
        </div>
      </div>

      <div
        ref={navRef}
        className="fixed -left-[300px] top-0 bottom-0 w-[250px] bg-[#0E161E]  z-[9999] duration-500 font-outfit "
      >
        <div className="flex items-center justify-between border-b border-dashed border-sonali py-2 px-2">
          <div className="flex gap-2 items-center">
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
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer text-sonali"
          ></IoClose>
        </div>
        <ul className="items-center gap-4 font-outfit text-white  *:mt-4 *:text-center *:text-[22px] *:py-4">
          <li className="hover:text-[#fad76b] duration-500">
            <NavLink
              onClick={handleSideBar}
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-[#fad76b] duration-500">
            <NavLink
              onClick={handleSideBar}
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="hover:text-[#fad76b] duration-500">
            <NavLink
              onClick={handleSideBar}
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About Me
            </NavLink>
          </li>
          <li className="hover:text-[#fad76b] duration-500">
            <NavLink
              onClick={handleSideBar}
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className=" absolute bottom-0 w-full py-4 text-center">
          <h1 className="text-white">
            © Developer Portfolio by{" "}
            <span className="text-sonali">Sagor Hossain</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
