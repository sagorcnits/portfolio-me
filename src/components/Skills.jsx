import { Link } from "react-router-dom";
import bootstrapImg from "../assets/icons/bootstrap.webp";
import cssImg from "../assets/icons/css.webp";
import expressImg from "../assets/icons/express.webp";
import firebaseImg from "../assets/icons/firebase.webp";
import htmlImg from "../assets/icons/html.webp";
import JSImg from "../assets/icons/javascript.jpg";
import mongoDBImg from "../assets/icons/mongoDB.webp";
import nextImg from "../assets/icons/next-js.webp";
import nodeImg from "../assets/icons/node.webp";
import reactImg from "../assets/icons/react.webp";
import reduxImg from "../assets/icons/redux.webp";
import tailwondImg from "../assets/icons/tailwind.webp";
import SectionIntro from "./SectionIntro";
const Skills = ({path}) => {
  const skilsArr = [
    {
      title: "HTML5",
      img: htmlImg,
    },
    {
      title: "CSS",
      img: cssImg,
    },
    {
      title: "Bootstrap",
      img: bootstrapImg,
    },
    {
      title: "Tailwind",
      img: tailwondImg,
    },
    {
      title: "React JS",
      img: reactImg,
    },
    {
      title: "Next JS",
      img: nextImg,
    },
    {
      title: "Node JS",
      img: nodeImg,
    },
    {
      title: "Express JS",
      img: expressImg,
    },
    {
      title: "MongoDB",
      img: mongoDBImg,
    },
    {
      title: "Redux",
      img: reduxImg,
    },
    {
      title: "Firebase",
      img: firebaseImg,
    },
    {
      title: "JavaScript",
      img: JSImg,
    },
  ];


  
  return (
    <div className="max-w-6xl mx-auto">
      <SectionIntro
        titles={{
          title: "My Skills",
          header: `Turning code into creative`,
          span: `solutions`,
        }}
      ></SectionIntro>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
        {skilsArr.map((item, id) => {
          return (
            <div
              key={id}
              className="bg-[#0E161E] p-4 space-y-4 rounded-md border border-[#315779]  relative overflow-hidden skill-card hover:rotate-12 duration-500"
            >
              <img className="w-[40%] mx-auto" src={item.img} alt="" />
              <h1 className="text-center text-white russo-one">{item.title}</h1>
              <div
                className={`size-24 rounded-full effect duration-500 border-r-sonali border-t-sonali border-l-[#0E161E] border-b-[#0E161E]  border-[30px] absolute -top-14 -right-9 bg-[#0E161E] `}
              ></div>
            </div>
          );
        })}
      </div>
     {path=="home" && <div className="text-center mt-10">
      <Link to="/about"><button className="button  russo-one">Show All</button></Link>
      </div>}
    </div>
  );
};

export default Skills;
