import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './pages/Video'
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(()=>{
    getVideos();
  }, [])



  return (
    <div className="App">
      <div className="app-videos">

        { video.map((item)=>{
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        }) }

        {/* <Video
          likes={444}
          messages={999}
          shares={599}
          name="Josué"
          description="Gato Serelepe"
          music="Cinematic Music"
          url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        /> */}
      </div>
    </div>
  );
}

export default App;
