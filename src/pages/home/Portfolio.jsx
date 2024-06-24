import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";

const Portfolio = ({path}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
     {path=="home" && <div className="text-center russo-one mt-10">
       <Link to="/projects"><button className="button">View More</button></Link>
      </div>}
    </div>
  );
};

export default Portfolio;
