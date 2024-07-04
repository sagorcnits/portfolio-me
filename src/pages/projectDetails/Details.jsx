import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import TinyBanner from "../../components/TinyBanner";
import useProjects from "../../hooks/useProjects";

const Details = () => {
  const { id } = useParams();
  const projects = useProjects();
  const project = projects.find((project) => project.id == id);

  //   console.log(project);

  return (
    <div>
      <Helmet>
        <title>sagor - detils</title>
      </Helmet>
      <TinyBanner info={{ title: "Details" }}></TinyBanner>
      <section className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row  gap-6 ">
          <div className="md:flex-1 rounded-md overflow-hidden h-[450px] bg-cover" style={{backgroundImage:`url(${project?.image})`}}>
            {/* <img
              className="w-full h-full hover:scale-[1.1] duration-700"
              src={project?.image}
              alt="imgage"
            /> */}
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-white font-semibold">
              <span className="gr-sonali russo-one">Project Name :</span>{" "}
              {project?.name}
            </h1>
            <p className="text-white border-b pb-5 border-dashed border-sonali">
              <span className="gr-sonali russo-one">
                Project Description :{" "}
              </span>
              {project?.description}
            </p>
            <div className="text-white border-b pb-5 border-dashed border-sonali space-y-3">
              <p className="gr-sonali russo-one"> Best 3 Feature : </p>

              {project?.feature?.map((feature, id) => {
                return (
                  <p>
                    {" "}
                    <b className="text-green-500">{id + 1}.</b> {feature}
                  </p>
                );
              })}
            </div>
            <p className="text-white">
              <span className="gr-sonali russo-one">technology :</span>{" "}
              {project?.technology}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
