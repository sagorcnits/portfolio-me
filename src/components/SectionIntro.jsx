const SectionIntro = ({ titles }) => {
  return (
    <div className="text-center md:w-1/2 mx-auto mt-16">
      <p className="gr-sonali font-bold font-outfit">{titles.title}</p>
      <h1 className="russo-one text-[25px] md:text-[35px] text-white">
        {titles.header} <span className="gr-sonali">{titles.span}</span>
      </h1>
    </div>
  );
};

export default SectionIntro;
