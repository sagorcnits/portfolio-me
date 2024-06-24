import ExperCard from "../../components/ExperCard";
import SectionIntro from "../../components/SectionIntro";

const Experience = () => {
  return (
    <div className="mt-32">
      <SectionIntro
        titles={{
          title: "Experience",
          header: `The professional experience in`,
          span: `this field`,
        }}
      ></SectionIntro>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        <ExperCard
          info={{
            position: "Frontend Developer",
            address: "Fiverr (freelance)",
          }}
        ></ExperCard>
        <ExperCard
          info={{
            position: "Programming Hero",
            address:
              "I completed the  Web Development Course from Programming Hero",
          }}
        ></ExperCard>
        <ExperCard
          info={{
            position: "Self Employed",
            address: "Code and Build Somthing in everyday",
          }}
        ></ExperCard>
      </div>
    </div>
  );
};

export default Experience;
