const Shimmer = () =>{
    return(
        <div className="flex flex-wrap">
        {Array(20).fill("").map((e,index)=>(
        <div key={index} className="p-2 m-5">
            <div className="h-36 w-52 bg-gray-300 rounded-xl"></div>
            <div className="w-19 h-5 p-1 m-1 bg-gray-200"></div>
            <div className="w-19 h-5 p-1 m-1 bg-gray-200"></div>
            <div className="w-19 h-5 p-1 m-1 bg-gray-200"></div>
        </div>))}
        </div>
    );
};

export default Shimmer;