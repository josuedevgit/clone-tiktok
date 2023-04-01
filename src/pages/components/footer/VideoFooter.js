import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="video-footer">
        <div className="texts">
            <h3>CosmoGeek</h3>
            <p>Descrição do Vídeo</p>
            <div className="music">
                <MusicNoteIcon className="icon"/>
                <div className="music-text">
                    <p>Título da musica</p>
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