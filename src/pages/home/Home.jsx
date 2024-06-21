import About from "../../components/About";
import Skills from "../../components/Skills";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section>
        <About></About>
      </section>
      <section className="mt-28">
        <Skills></Skills>
      </section>
    </div>
  );
};

export default Home;
