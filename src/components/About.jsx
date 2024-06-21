import bannerImg from "../assets/images/sagor-about.jpg";
import SectionIntro from "./SectionIntro";
const About = () => {
  return (
    <div  className="max-w-6xl mx-auto">
      <SectionIntro
        titles={{
          title: "About Me",
          header: `Transforming visions into exceptional`,
          span: `portfolios`,
        }}
      ></SectionIntro>
      <div  className="flex flex-col-reverse md:flex-row gap-2 mt-10 items-center ">
        <div className="text-white flex-1 mt-4 md:mt-0">
          <p className="gr-sonali text-[24px] russo-one font-bold">WHO I AM?</p>
          <p className="font-outfit text-balance">
            My name is <span className="text-[#4cf183]">Sagor Hossain</span>. I am a professional and enthusiastic programmer
            in my daily life. I am a quick learner with a self-learning
            attitude. I love to learn and explore new technologies and am
            passionate about problem-solving. I love almost all the stacks of
            web application development and love to make the web more open to
            the world. My core skill is based on JavaScript and I love to do
            most of the things using JavaScript. I am available for any kind of
            job opportunity that suits my skills and interests.
          </p>
          <div className="mt-6">
            <p className="text-sonali text-[22px] font-outfit">Name</p>
            <h1 className="text-[23px] russo-one">Md. Sagor Hossain</h1>
          </div>
          <div className="mt-6">
            <p className="text-sonali text-[22px] font-outfit">Email</p>
            <h1 className="text-[23px] russo-one">
              sagor.official.pb@gmail.com
            </h1>
          </div>
          <div
            className="mt-6 flex justify-between items-center
          "
          >
            <div>
              <p className="text-sonali text-[22px] font-outfit">Phone</p>
              <h1 className="text-[23px] russo-one">01852024152</h1>
            </div>
            <div>
              <p className="text-sonali text-[22px] font-outfit">Nationality</p>
              <h1 className="text-[23px] russo-one">Bangladeshi</h1>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="md:w-[350px] md:h-[460px] overflow-hidden  rounded-md  border-[2px] border-sonali ">
            <img className="w-full scale-[2]" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
