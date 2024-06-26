import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="p-3 cursor-pointer bg-[#0E161E] rounded-md overflow-hidden card-shadow blog-card">
      <figure className="overflow-hidden rounded-md h-[200px]">
        <img
          className="duration-500 blog-img h-full"
          src={blog.cover_image}
          alt=""
        />
      </figure>
      <div>
        <div className="flex items-center justify-between  text-[#16F2B3] font-outfit py-2 text-[14px]">
          <p>Published : {blog.created_at.slice(0, 10)}</p>
          <div className="flex items-center gap-4 *:flex *:items-center *:gap-1">
            <div>
              <span>{blog.public_reactions_count}</span>
              <AiFillLike></AiFillLike>
            </div>
            <div>
              <span>{blog.comments_count}</span>
              <FaCommentAlt></FaCommentAlt>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <Link to={blog.canonical_url} target="_blank">
            <h1 className="text-[18px] font-outfit text-white hover:underline duration-500">
              {blog.title}
            </h1>
          </Link>
          <p className="text-[14px] text-white py-3 font-outfit">
            {blog.description}
          </p>
        </div>
        <Link to={blog.canonical_url} target="_blank">
          <p className="text-center russo-one gr-sonali hover:underline duration-500">
            Read More...
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
