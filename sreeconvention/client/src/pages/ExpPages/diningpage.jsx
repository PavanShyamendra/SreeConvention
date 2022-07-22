import React from "react";
import dining from "../../assets/icons/dining/dining1.jpeg"
import dining2 from "../../assets/icons/dining/dining2.JPG"
import kc from "../../assets/icons/dining/KC.JPG"

const DiningPage = ()=>{

    return (
        <div className="min-h-screen bg-diningcol flex flex-col">
            <div className="basis-1/2 flex flex-row items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={dining} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-36 p-2 text-diningfont ">
                        <p className="text-center text-5xl font-serif justify-end ">Here Comes</p>
                    </div>
                    <div className="flex justify-start ml-36 p-2 text-diningfont ">
                        <p className="text-center text-6xl font-serif font-bold">
                            The
                        </p>
                    </div>
                    <div className="flex justify-start ml-36 p-2 text-diningfont ">
                        <p className="text-center text-6xl font-serif font-bold">
                            Dining.
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="basis-1/2 flex flex-row-reverse items-stretch">
                <div className="basis-4/6 w-4/6 m-12 ">
                    <img src={dining2} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif justify-end">
                            People say
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                             our dining hall is
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-5xl font-serif">
                            quite an Attraction 
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-well ">
                        <p className="text-center text-4xl font-serif">
                             and people are always right
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DiningPage