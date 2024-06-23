import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="p-3 cursor-pointer bg-[#0E161E] rounded-md overflow-hidden card-shadow blog-card">
      <figure className="overflow-hidden rounded-md">
        <img
        className="duration-500 blog-img"
          src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1719073660~exp=1719077260~hmac=ade3c38c95667ba1bae8f5660d954d0b551560ecfb9945f122ba3c94594fb41b&w=740"
          alt=""
        />
      </figure>
      <div>
        <div className="flex items-center justify-between  text-[#16F2B3] font-outfit py-2 text-[14px]">
          <p>1 Day ago</p>
          <div className="flex items-center gap-4 *:flex *:items-center *:gap-1">
            <div>
              <span>0</span>
              <AiFillLike></AiFillLike>
            </div>
            <div>
              <span>0</span>
              <FaCommentAlt></FaCommentAlt>
            </div>
          </div>
        </div>
        <h1 className="text-[18px] font-outfit text-white">
          Top 10 React js Interview Question
        </h1>
        <p className="text-[14px] text-white py-3 font-outfit">
          As a React developer, it is important to have a solid understanding of
          the framework's key concepts...
        </p>
        <p className="text-center russo-one gr-sonali">Read More...</p>
      </div>
    </div>
  );
};

export default BlogCard;
