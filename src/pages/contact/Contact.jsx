import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Swal from "sweetalert2";
import ContactCard from "../../components/ContactCard";
import SectionIntro from "../../components/SectionIntro";
import Social from "../../components/Social";
import TinyBanner from "../../components/TinyBanner";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const name = data.name;
    const email = data.email;
    const message = data.message;
    const userInfo = { name, email, message };
    console.log(userInfo);

    Swal.fire({
      icon: "success",
      title: "Thanks for Contact",
      text:"You will be emailed within a few moments",
      showConfirmButton: false,
      timer: 1500,
    });

    reset();
  };

  return (
    <div>
      <Helmet>
        <title>sagor - contact</title>
      </Helmet>
      <TinyBanner info={{ title: "Contact Me" }}></TinyBanner>
      <section>
        <SectionIntro
          titles={{
            title: "contact",
            header: `Contact With`,
            span: `Me`,
          }}
        ></SectionIntro>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto mt-10">
          <form
            onSubmit={handleSubmit(submit)}
            className="text-white flex-1 border border-[#315779] p-4 rounded-md"
          >
            <p className="font-outfit">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
            <div className="mt-4">
              <label className="gr-sonali russo-one">Your Name:</label> <br />
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                className="w-full rounded-md bg-transparent  py-2 focus:outline-none px-4 border border-[#315779]"
              />
            </div>
            <div className="mt-4">
              <label className="gr-sonali russo-one">Your Email:</label> <br />
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="w-full rounded-md bg-transparent  py-2 focus:outline-none px-4 border border-[#315779]"
              />
            </div>
            <div className="mt-4">
              <label className="gr-sonali russo-one">Your Message:</label>{" "}
              <br />
              <textarea
                {...register("message", { required: true })}
                type="text"
                name="message"
                className="w-full h-[150px] overflow-auto resize-none rounded-md bg-transparent  py-2 focus:outline-none px-4 border border-[#315779]"
              />
            </div>
            <button className="button w-full mt-4 russo-one">Submit</button>
          </form>
          <div className="flex-1">
            <div>
              <ContactCard
                info={{
                  icon: <MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>,
                  title: "Send Email",
                  address: "sagor.official.pb@gmail.com",
                }}
              ></ContactCard>
            </div>
            <div className="mt-6">
              <ContactCard
                info={{
                  icon: <FaPhoneFlip></FaPhoneFlip>,
                  title: "Please Call",
                  address: "01852024152",
                }}
              ></ContactCard>
            </div>

            <div className="mt-6">
              <ContactCard
                info={{
                  icon: <FaLocationDot></FaLocationDot>,
                  title: "Come to here",
                  address: "Komorpur, Pabna Sadar Pabna",
                }}
              ></ContactCard>
            </div>
            <div className="mt-6 flex justify-center">
              <div>
                <h1 className="russo-one gr-sonali text-center pb-4">
                  Social Media
                </h1>
                <Social></Social>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
