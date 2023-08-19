import React from "react";

const Button  = ({name}) =>{
    return (
        <div className="">
            <button className="px-3 py-2 m-3 bg-gray-200 rounded-lg whitespace-nowrap" >{name}</button>
        </div>
    );
}

export default Button;