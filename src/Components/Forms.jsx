import React from "react";
let handlesubmit = (e) =>{
 e.preventDefault();
}
let Forms = () =>{
    return(
    <div className="w-[70%] rounded-md h-[100%] bg-white px-5 border-t-4 border-indigo-500">
        <h2 className="mb-4 mt-2 text-2xl font-semibold text-center">Get in touch with us</h2>
        <form onSubmit={handlesubmit} action="" className="flex flex-col gap-5">
        <input className="p-1 rounded-md border-2" type="text" placeholder="Enter your Name"/>
        <input className="p-1 rounded-md border-2" type="email" placeholder="Enter your Email"/>
        <input className="p-1 rounded-md border-2" type="text" placeholder="Enter your Qualification"/>
        <input className="p-1 rounded-md border-2" type="number" placeholder="Enter your Contact"/>
        <input class="p-2 cursor-pointer rounded-md border-2 bg-indigo-500 text-white" type="submit" value="Request Call Back" />
        </form>
    </div>
    )

}

export default Forms;