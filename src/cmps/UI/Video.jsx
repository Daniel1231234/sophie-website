// import videoUrl from "../../assets/video.mp4"

// export const Video = () => {
//   return (
//     <video controls width="100%">
//       <source src={videoUrl} type="video/mp4"
//       />
//       Sorry, your browser doesn't support videos.
//     </video>
//   );
// }

import React from 'react';
import ReactPlayer from 'react-player/youtube'
const url = "https://www.youtube.com/watch?v=d1xdZlMyDF8"

export const Video = () => {
  return (
     <ReactPlayer
    url={url}
    width='500px'
    playing={false}
    height='390px'
    controls={true}
    config={{
      youtube: {
        playerVars: {
          autoplay: 1,
          https: 1
        }
      },
      file: {
        attributes: {
          origin: "http://127.0.0.1:5173"
        }
      }
    }}
  />
  );
};










