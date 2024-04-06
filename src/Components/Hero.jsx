import React from "react";
let Hero = () => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-semibold ">Become ACCA In 18 months</h1>
                <p className="w-[70%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni odit incidunt fugiat vero amet ad voluptatibus velit quae totam tenetur!</p>
                <div className="flex flex-wrap shrink-0 gap-8 mb-4">
                    <h3 className="shadow-2xl shadow-gray-500 px-3 py-3 rounded-lg">Representation</h3>
                    <h3 className="shadow-2xl shadow-gray-500 px-3 py-3 rounded-lg">Work Culture</h3>
                    <h3 className="shadow-2xl shadow-gray-500 px-3 py-3 rounded-lg">Gurantee</h3>
                    <h3 className="shadow-2xl shadow-gray-500 px-3 py-3 rounded-lg">Family</h3>
                </div>
                <div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-10">Download Brochure</button>
                    <button className="px-4 py-2 text-white bg-red-500 rounded-md">Learn More</button>
                </div>
            </div>
            </>
    )
}

export default Hero;