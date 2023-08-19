import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
const MainContainer = () =>{

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (isMenuOpen)? (
        <div className="col-span-10 absolute left-[13%] top-[10%] right-0 no-scroll bg-white ">
            <ButtonList/>
            <VideoContainer/>
        </div>):(<div className="col-span-10 absolute left-0 top-[10%] right-0 no-scroll bg-white ">
            <ButtonList/>
            <VideoContainer/>
        </div>)
    
}

export default MainContainer;