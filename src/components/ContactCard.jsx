import React from "react";

const ContactCard = ({ info }) => {
  return (
    <div className="flex items-center gap-6 text-white border border-[#315779] p-8 rounded-md hover:bg-[#0E161E] duration-500">
      <div className="text-[40px] text-sonali">{info.icon}</div>
      <div>
        <h1 className="russo-one gr-sonali">{info.title}</h1>
        <p className="font-outfit">{info.address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
