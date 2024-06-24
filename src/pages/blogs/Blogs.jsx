import BlogCard from "../../components/BlogCard";
import SectionIntro from "../../components/SectionIntro";
import TinyBanner from "../../components/TinyBanner";

const Blogs = () => {
  return (
    <div>
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
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
