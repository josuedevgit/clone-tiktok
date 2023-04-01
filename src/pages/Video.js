import React, { useRef, useState } from 'react'
import "./video.css"

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {

        if(play) {
            videoRef.current.play()
            setPlay(false)
        } else {
            videoRef.current.pause()
            setPlay(true)
        }
        
    }

  return (
    <div className="video">
        <video 
            className="video-player" 
            src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"

            ref={videoRef}
            onClick={handdleStart}
            loop
        ></video>
    </div>
  )
}

export default Video