import React from "react";
import parking1 from "../../assets/icons/parking/parking1.JPG"
import parking2 from "../../assets/icons/parking/parking2.JPG"
import kc from "../../assets/icons/dining/KC.JPG"


const ParkingPage = ()=>{

    return (
        <div className="min-h-screen bg-parkingcol flex flex-col">
            <div className="basis-1/2 flex flex-row-reverse items-stretch">
                <div className="basis-4/6 w-4/6 m-12 ">
                    <img src={parking1} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-24 p-2 text-light ">
                        <p className="text-center text-4xl font-serif justify-end" style ={{color: "#F2D7D9"}}>
                            Do you know what does spacious Mean?
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-light ">
                        <p className="text-center text-4xl font-serif text-parkingfont">
                             Its our
                        </p>
                    </div>
                    <div className="flex justify-center ml-24 p-2 text-light " >
                        <p className="text-center text-6xl font-serif text-parkingfont" >
                            Parking lot 
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="basis-1/2 flex flex-row items-stretch">
                <div className="basis-1/2 w-1/2 h-1/2 m-12 ">
                    <img src={parking2} alt="Logo" className="rounded-lg shadow-2xl" />
                </div>
                <div className="basis-1/2 flex flex-col w-1/2 item-center justify-center">
                    <div className="flex justify-start ml-36 p-2 text-parkingfont ">
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
        </div>
    )
}

export default ParkingPage