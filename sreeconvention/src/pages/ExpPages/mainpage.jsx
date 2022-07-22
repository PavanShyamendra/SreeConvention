import React from "react";
import dining from "../../assets/icons/dining/dining1.jpeg"
import hall1 from "../../assets/icons/hall/hall1.JPG"
import hall2 from "../../assets/icons/hall/hall2.JPG"
import hallmain from "../../assets/icons/hall/hallmain.JPG"
const MainPage = ()=>{

    return (
        <div className="min-h-screen bg-creamy flex flex-col">
            <div className="basis-1/2 flex flex-row items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={dining} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-36 p-2 text-well ">
                        <p className="text-center text-5xl font-serif justify-end ">Well,</p>
                    </div>
                    <div className="flex justify-start ml-36 p-2 text-well ">
                        <p className="text-center text-5xl font-serif">
                            this is the best 
                        </p>
                    </div>
                    <div className="flex justify-start ml-36 p-2 text-well ">
                        <p className="text-center text-5xl font-serif">
                            choice mate.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="basis-1/2 flex flex-row-reverse items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={hallmain} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif justify-end">
                            With a huge 250 member seating
                        </p>
                    </div>
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                             One place for all your occasions,
                        </p>
                    </div>
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                            as much as 400 guests are welcomed
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="basis-1/2 flex flex-row items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={hall2} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif justify-end">
                            Host your parties, meetings and 
                        </p>
                    </div>
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                            any gathering in our place
                        </p>
                    </div>
                    <div className="flex justify-start ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                            with some grandeur
                        </p>
                    </div>

                </div>
            </div>
            <div className="basis-1/2 flex flex-row-reverse items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={hall1} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif justify-end">
                            Centralised A/C, 
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                            power packed sound system,
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                            And a stage for you to perform!!!
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MainPage