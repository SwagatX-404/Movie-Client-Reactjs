import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {

    let params = useParams();
    let key = params.ytTrailerId;

    //https://www.youtube.com/watch?v=AiohkY_XQYQ

  return (
    <div className="react-player-container">
      
      {(key!=null)?<ReactPlayer controls={true} playing={false} url ={`https://www.youtube.com/watch?v=${key}`} 
      width = '100%' height='100%' />:null}
    </div>
  )
}

export default Trailer