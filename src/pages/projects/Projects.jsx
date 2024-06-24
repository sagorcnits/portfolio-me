import SectionIntro from "../../components/SectionIntro";
import TinyBanner from "../../components/TinyBanner";
import Portfolio from "../home/Portfolio";

const Projects = () => {
  return (
    <div>
      <TinyBanner info={{ title: "Projects" }}></TinyBanner>
      <section>
      <SectionIntro
        titles={{
          title: "projects",
          header: `My all `,
          span: `work`,
        }}
      ></SectionIntro>
        <Portfolio path="projects"></Portfolio>
      </section>
    </div>
  );
};

export default Projects;
