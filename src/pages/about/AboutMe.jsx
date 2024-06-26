import { Helmet } from "react-helmet-async";
import About from "../../components/About";
import Skills from "../../components/Skills";
import TinyBanner from "../../components/TinyBanner";
import Educations from "./Educations";
import Experience from "./Experience";
const AboutMe = () => {
  return (
    <div>
       <Helmet>
        <title>sagor - about</title>
      </Helmet>
      <TinyBanner info={{ title: "About Me" }}></TinyBanner>
      <section>
        <About></About>
      </section>
      <section >
        <Experience></Experience>
      </section>
      <section>
        <Skills path="about"></Skills>
      </section>
      <section>
        <Educations></Educations>
      </section>
    </div>
  );
};

export default AboutMe;
