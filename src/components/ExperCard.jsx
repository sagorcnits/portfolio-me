const ExperCard = ({ info }) => {
  return (
    <div className="flex items-center gap-6 text-white border border-[#315779] p-6 rounded-md hover:bg-[#0E161E] duration-500">
      <div>
        <svg
          className="text-sonali"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="36"
          width="36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
        </svg>
      </div>
      <div>
        <h1 className="russo-one gr-sonali">{info.position}</h1>
        <p className="font-outfit">{info.address}</p>
      </div>
    </div>
  );
};

export default ExperCard;
