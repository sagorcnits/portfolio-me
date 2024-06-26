import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import About from "../../components/About";
import BlogCard from "../../components/BlogCard";
import SectionIntro from "../../components/SectionIntro";
import Skills from "../../components/Skills";
import useBlogs from "../../hooks/useBlogs";
import Banner from "./Banner";
import Portfolio from "./Portfolio";

const Home = () => {
  const blogs = useBlogs();

  return (
    <div>
      <Helmet>
        <title>sagor - home</title>
      </Helmet>
      <Banner></Banner>
      <section>
        <About></About>
      </section>
      <section className="mt-28">
        <Skills path="home"></Skills>
      </section>
      <section className="mt-28">
        <SectionIntro
          titles={{
            title: "Portfolio",
            header: `My recent `,
            span: `work`,
          }}
        ></SectionIntro>
        <Portfolio path="home"></Portfolio>
      </section>
      <section className="mt-28">
        <SectionIntro
          titles={{
            title: "Blogs",
            header: `Latest Some `,
            span: `Blog`,
          }}
        ></SectionIntro>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {blogs?.slice(0,6).map((blog,id) => <BlogCard key={id} blog={blog}></BlogCard>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/blogs">
            <button className="button russo-one">More Blogs</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
