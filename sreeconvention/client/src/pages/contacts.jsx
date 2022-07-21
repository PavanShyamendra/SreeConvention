import React from "react";

const ContactsPage = () => {

  return (
    <div className="flex flex-col-reverse bg-main min-h-screen">
        <div className="basis-0">
            <div className='flex justify-end py-4 pr-4'>
                <div className='bg-other ring-2 ring-other p-2 rounded-lg text-xl'>
                <button className='text-white'>Admin</button>
                </div>
            </div>
        </div>
        <div className="flex">
        <div className="m-10 w-1/2 flex flex-col items-center justify-center">
            <p className = "text-werejust text-6xl font-bold">we're just a click</p>
            <p className = "text-other text-8xl font-bold">AWAY <a className = "text-other text-9xl font-bold">!</a></p>
        </div>
        <div className="bg-contactCard shadow-lg m-40 mr-60 w-1/3 flex flex-col rounded-lg justify-center py-9">
            <div className="flex flex-row justify-start pl-14">
                <p className=" text-xl text-light">
                    Name:
                </p>
            </div>
            <div className="m-3 w-full items justify-center pd-10 px-10 pr-20">
                <input
                    className="form-input rounded-md w-full h-10 p-2 outline-none"
                    id="Name"
                    placeholder=""
                    type="text"
                />
            </div>
            
            <div className="flex flex-row justify-start pl-14">
                <p className=" text-xl text-light">
                    Email ID:
                </p>
            </div>
            <div className="m-3 w-full items justify-center pd-10 px-10 pr-20">
                <input
                    className="form-input rounded-md w-full h-10 p-2  outline-none"
                    id="Name"
                    placeholder=""
                    type="text"
                />
            </div>

            <div className="flex flex-row justify-start pl-14">
                <p className=" text-xl text-light">
                    Contact No:
                </p>
            </div>
            <div className="m-3 w-full items justify-center pd-10 px-10 pr-20">
                <input
                    className="form-input rounded-md w-full h-10 p-2 outline-none "
                    id="Name"
                    placeholder=""
                    type="text"
                />
            </div>
            
            <div className="flex flex-row items-center justify-center">
                <button className = "text-main text-xl font-bold w-40 bg-light p-2 rounded-lg text-xl">
                    Call me back,
                </button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default ContactsPage