import { Helmet } from "react-helmet-async";
import BlogCard from "../../components/BlogCard";
import SectionIntro from "../../components/SectionIntro";
import TinyBanner from "../../components/TinyBanner";
import useBlogs from "../../hooks/useBlogs";

const Blogs = () => {
  const blogs = useBlogs();

  // console.log(blogs);

  return (
    <div>
      <Helmet>
        <title>sagor - blogs</title>
      </Helmet>
      <TinyBanner info={{ title: "blogs" }}></TinyBanner>
      <section className="mt-28">
        <SectionIntro
          titles={{
            title: "Blogs",
            header: `Latest Some `,
            span: `Blog`,
          }}
        ></SectionIntro>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
      
       
          {blogs?.map((blog,id) => <BlogCard key={id} blog={blog}></BlogCard>)}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
