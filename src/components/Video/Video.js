import React from "react";
import "./Video.css";

const Video = (props) => {
  return (
    <div className="vimeo">
      <iframe
        src="https://player.vimeo.com/video/564998769?h=8b8fedcaa"
        title="video"
        width={(window.innerWidth / 16) * 12}
        height={(window.innerWidth / 16) * 7}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
