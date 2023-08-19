import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  // console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //make an API call after every key press
    //but if the difference between 2 API calls is <200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //decline the API call
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);

    // console.log(json);
    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 items-center fixed top-0 bg-white z-10 w-full">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img
            className="h-8 mx-6"
            alt="logo"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-15 h-full">
        <div>
          <input
            type="text"
            className=" p-[0.85rem] w-1/2 h-full border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" p-3 border border-gray-400 rounded-r-full h-full ">
            Search
          </button>
        </div>
        {showSuggestions && searchQuery.length !== 0 ? (
          <div className="fixed bg-white py-2 px-2 w-[30rem] rounded-lg  shadow-lg border border-gray-300">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 rounded-lg"
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user"
          src="https://www.shutterstock.com/image-vector/user-icon-person-profile-avatar-260nw-601713017.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
