import React from "react";

let Header = () =>{

    return(
        <>
            <div className="flex justify-between px-10 py-4 bg-indigo-500 text-white">
                <h1 className="cursor-pointer self-center">
                IndigoLearn
                </h1>
                <div className="flex gap-20 self-center">
                    <h2 className="cursor-pointer">Home</h2>
                    <h2 className="cursor-pointer">About</h2>
                    <h2 className="cursor-pointer">Contact</h2>
                    <h2 className="cursor-pointer">Learn</h2>
                </div>
                <button className="px-4 py-2 bg-teal-500 rounded-md">Login / Register</button>
            </div>
        </>
    )
}

export default Header;