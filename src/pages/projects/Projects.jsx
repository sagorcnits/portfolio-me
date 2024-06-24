import TinyBanner from "../../components/TinyBanner";
import Portfolio from "../home/Portfolio";

const Projects = () => {
  return (
    <div>
      <TinyBanner info={{ title: "Projects" }}></TinyBanner>
      <section>
        <Portfolio path="projects"></Portfolio>
      </section>
    </div>
  );
};

export default Projects;
