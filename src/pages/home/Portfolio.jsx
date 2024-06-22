import ProjectCard from "../../components/ProjectCard";
import SectionIntro from "../../components/SectionIntro";

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <SectionIntro
        titles={{
          title: "Portfolio",
          header: `My recent `,
          span: `work`,
        }}
      ></SectionIntro>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <div className="text-center russo-one mt-10">
        <button className="button">View More</button>
      </div>
    </div>
  );
};

export default Portfolio;
