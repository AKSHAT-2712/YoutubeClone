import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //Early Return Pattern
    if(!isMenuOpen) return null; 

    const desiredClassname = "z-0";

    return (
        <div className="bg-white p-5 col-span-2 fixed overflow-y-scroll h-fit">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <hr className="m-3"></hr>
            <ul className="mt-2">
                <li>Library</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            <hr className="m-3"></hr>
            <h1 className="font-bold mt-2 ">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <hr className="m-3"></hr>
            <h1 className="font-bold mt-2">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Fashon & Beauty</li>
            </ul>
            <hr className="m-3"></hr>
            <h1 className="font-bold mt-2">More From Youtube</h1>
            <ul>
                <li>Youtube Premium</li>
                <li>Youtube Studio</li>
                <li>Youtube Music</li>
                <li>Youtube Kids</li>
            </ul>
            <hr className="m-3"></hr>
            <ul className="mt-2">
                <li>Settings</li>
                <li>Report History</li>
                <li>Help</li>
                <li>Send Feedback</li>
            </ul>
        </div>
    );

}

export default SideBar;