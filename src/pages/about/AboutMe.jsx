import About from "../../components/About";
import Skills from "../../components/Skills";
import TinyBanner from "../../components/TinyBanner";

const AboutMe = () => {


  return (
    <div>
      <TinyBanner info={{ title: "About Me" }}></TinyBanner>
      <section>
        <About></About>
      </section>
      <section>
        <Skills path='about'></Skills>
      </section>
    </div>
  );
};

export default AboutMe;
