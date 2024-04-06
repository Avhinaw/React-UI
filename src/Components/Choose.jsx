import React from "react";

const Choose = ({ icon: Icon, type, description }) => {
  return (
    <div className="w-[25vw] py-5 rounded-md flex flex-col aling-center items-center gap-3 bg-[#d5eaffdd]">
      <Icon size={"3em"} /> {/* Using the icon component */}
      <h3 className="text-xl font-semibold">{type}</h3>
      <p className="w-[70%] text-center">{description}</p>
    </div>
  );
};

export default Choose;
