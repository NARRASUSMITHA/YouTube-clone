import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/playvideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {

  const {VideoId,categoryId} = useParams();
    
  console.log("VideoId:", VideoId);

  return (
    <div className='play-container'>
      <PlayVideo  VideoId={VideoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
