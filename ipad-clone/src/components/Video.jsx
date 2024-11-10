import React from 'react'
import video from "../video/large.mp4"

function Video() {
  return (
    <>
     <div className="video-container">
     <div className="video-title">
      <h1>iPad</h1>
      <h3>Touch, draw, and type <br/>on one magical device.</h3>
    </div>
    <video autoPlay loop muted controls>
      <source src={video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
   
  </div>
    </>
  )
}

export default Video