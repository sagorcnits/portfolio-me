import { Link } from "react-router-dom";
import BlogCard from "../../assets/images/BlogCard";
import About from "../../components/About";
import SectionIntro from "../../components/SectionIntro";
import Skills from "../../components/Skills";
import Banner from "./Banner";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
        <About></About>
      </section>
      <section className="mt-28">
        <Skills path="home"></Skills>
      </section>
      <section className="mt-28">
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
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
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
