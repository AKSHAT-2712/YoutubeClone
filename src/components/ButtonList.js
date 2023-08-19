import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Dramedy",
  "News",
  "Mixes",
  "C++",
  "Movie Musicals",
  "Bollywood music",
  "Cricket",
  "Mantras",
  "Gadgets",
  "Esports",
  "Film Criticisms",
  "Tourist destinations",
  "Tests",
  "Role-playing games",
  "Cars",
  "Recently Uploaded",
  "New To You",
];

const ButtonList = () => {
  return (
    <div className="flex no-scrollbar overflow-x-scroll  ">
        {list.map((x,index) => <Button key = {index} name={x} />)}
    </div>
  );
};

export default ButtonList;
