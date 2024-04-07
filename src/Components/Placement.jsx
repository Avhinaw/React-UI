import React from "react";


let Placement = ({practice, description})=>{
    return (
        <div className="flex flex-col gap-3 mx-10">
            <h3 className="text-2xl font-semibold">{practice}</h3>
            <p className="mb-5">{description}</p>
        </div>
    )
}

export default Placement;