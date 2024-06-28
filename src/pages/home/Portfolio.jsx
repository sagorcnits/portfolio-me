import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import useProjects from "../../hooks/useProjects";

const Portfolio = ({ path }) => {
  const projects = useProjects();
  // console.log(projects);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {path == "home"
          ? projects
              ?.slice(0, 6)
              .map((project, id) => (
                <ProjectCard key={id} project={project}></ProjectCard>
              ))
          : projects?.map((project, id) => (
              <ProjectCard key={id} project={project}></ProjectCard>
            ))}
      </div>
      {path == "home" && (
        <div className="text-center russo-one mt-10">
          <Link to="/projects">
            <button className="button">View More</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
