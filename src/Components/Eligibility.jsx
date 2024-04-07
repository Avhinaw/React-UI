import React from "react";

let Eligibility = ({criterion, description})=>{
    return(
        <div className="w-[20vw] rounded-md h-[70%] text-center bg-white py-4 border-t-4 border-indigo-500">
            <h4 className="mb-2 text-xl font-semibold">{criterion}</h4>
            <h5 className="font-semibold text-sm">{description}</h5>
        </div>
    )
}

export default Eligibility;