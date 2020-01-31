import React from "react"
const Video = ({classes, videoSrcURL, videoTitle, ...props }) => (
  <div className={classes}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    <span className="top-dots" />
  </div>
)
export default Video