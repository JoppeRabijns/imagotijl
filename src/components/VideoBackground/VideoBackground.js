import React from "react";
import "./videoBackground.css";
import video from "../../assets/websiteachtergrond.mp4";
import image from "../../assets/photo1.jpg";

const VideoBackground = (props) => {
  return (
    <>
      {window.innerWidth < 769 ? (
        <img className="image" src={image} alt="" />
      ) : (
        <video
          autoPlay
          muted
          loop
          className="video"
          src={video}
          type="video/mp4"
        />
      )}
    </>
  );
};

export default VideoBackground;
