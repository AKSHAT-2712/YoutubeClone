const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet , statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-1 m-1 w-[18.8rem] cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

//Higher Order Component
// const RedBorderVideoCard = () =>{
//   return (
//     <div className="p-1 m-1 border border-red-900">
//       <VideoCard/>
//     </div>
//   );
// }

export default VideoCard;
