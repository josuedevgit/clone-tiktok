import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="video-footer">
        <div className="texts">
            <h3>{ name }</h3>
            <p>{ description }</p>
            <div className="music">
                <MusicNoteIcon className="icon"/>
                <div className="music-text">
                    <p>{ music }</p>
                </div>
            </div>
        </div>
        <img 
            className="record" 
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" 
            alt="Imagem de um vinil girando "
        />

    </div>
  )
}

export default VideoFooter