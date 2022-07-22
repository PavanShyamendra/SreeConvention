import React from "react";
import CalendarPage from "./calendar";
import MainPage from "./ExpPages/mainpage"
import DiningPage from "./ExpPages/diningpage"
import ParkingPage from "./ExpPages/parkingpage"

const ExplorePage = () => {

    return (
        <div>
            
            <MainPage/>
            <DiningPage/>
            <ParkingPage/>
            <CalendarPage/>
        </div>
    )

}

export default ExplorePage