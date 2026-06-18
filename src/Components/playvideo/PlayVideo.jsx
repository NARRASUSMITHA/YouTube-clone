import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/assets/video.mp4'
import like from '../../assets/assets/like.png'
import dislike from '../../assets/assets/dislike.png'
import share from '../../assets/assets/share.png'
import save from '../../assets/assets/save.png'
import jack from '../../assets/assets/jack.png'
import user_profile from '../../assets/assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { data, useParams } from 'react-router-dom'


const PlayVideo = ({VideoId}) => {
   // const {videoId} =useParams();
    const [apiData,setApiData] =useState(null);
    const [channelData,setChannelData] =useState(null);
    const [commentData,setCommentData]=useState([])

        
const fetchVideoData = async () =>{
    //fetching video data
const videoDetails_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${API_KEY}`;
await fetch (videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
}

const fetchOtherData = async () =>{
    //fetching channel data
    const channeldata_url=` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channeldata_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
     //fetchind comment data
     const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${VideoId}&key=${API_KEY}`
     await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
}

{/*}useEffect(()=>{
    fetchVideoData();
 },[])

 useEffect(()=>{
    fetchOtherData();
 },[])*/}
 useEffect(() => {
    fetchVideoData();
}, [VideoId]);

useEffect(() => {
    if(apiData){
        fetchOtherData();
    }
}, [apiData]);
  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted></video>*/}
       {/*} <iframe  src={`https://www.youtube.com/embed/${videoId}`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/}
       <iframe
  src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  title="YouTube Video Player"
></iframe>
<h3>{apiData?apiData.snippet.title:"Title Here "}</h3>
<div className="play-video-info">
   {/* <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>*/}
   <p>
  {apiData?.statistics?.viewCount
    ? value_converter(apiData.statistics.viewCount)
    : "16k views"}
  &bull;
  {apiData?.snippet?.publishedAt
    ? moment(apiData.snippet.publishedAt).fromNow()
    : ""}
</p>
    <div>
        <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
        <span><img src={dislike} alt="" />123</span>
        <span><img src={share} alt="" />Share</span>
        <span><img src={save} alt="" />Save</span>
    </div>
</div>
<hr/>
<div className="publisher">
    <img src={channelData?channelData.snippet.thumbnails.default.url:null} alt="" />
    <div>
        <p>{apiData?apiData.snippet.channelTitle:""}</p>
        <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
    </div>
    <button>SUBSCRIBE</button>
</div>
<div className="video-description">
    <p>{apiData?apiData.snippet.description.slice(0,250):"Description"}</p>
    <hr/>
    <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
    {commentData.map((item,index)=>{
        return(
            <div key={index} className="comment">
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
        <div>
            <h3> <span>1 day ago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className='comment-action'>
                <img src={like} alt="" />
                <span>{ value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike}  alt=""/>
                <span>30</span>
            </div>
        </div>
        </div>

        )
    })}

        
    </div>
</div>
    
  )
}

export default PlayVideo
