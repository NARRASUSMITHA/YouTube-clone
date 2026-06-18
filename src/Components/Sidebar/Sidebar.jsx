import React from 'react'
import './Sidebar.css'
import home from '../../assets/assets/home.png'
import game_icon from '../../assets/assets/game_icon.png'
import automobiles from '../../assets/assets/automobiles.png'
import sports from '../../assets/assets/sports.png'
import entertainment from '../../assets/assets/entertainment.png'
import tech from '../../assets/assets/tech.png'
import music from '../../assets/assets/music.png'
import blogs from '../../assets/assets/blogs.png'
import news from '../../assets/assets/news.png'
import jack from '../../assets/assets/jack.png'
import simon from '../../assets/assets/simon.png'
import tom from '../../assets/assets/tom.png'
import megan from '../../assets/assets/megan.png'
import cameron from '../../assets/assets/cameron.png'


const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ?""  : "small-sidebar"}`}>
      <div className='shortcut-links'>
        <div  onClick={()=>setCategory(0)} className={`side-links ${category===0?"active":""}`}>
          <img src={home} alt="" /><p>Home</p>
      </div>
      <div onClick={()=>setCategory(20)} className={`side-links ${category===20?"active":""}`}>
          <img src={game_icon} alt="" /><p>Game</p>
      </div>
      <div  onClick={()=>setCategory(2)} className={`side-links ${category===2?"active":""}`}>
           <img src={automobiles} alt="" /><p>Automobiles</p>
      </div>
      <div  onClick={()=>setCategory(24)} className={`side-links ${category===24?"active":""}`}>
           <img src={entertainment} alt="" /><p>Entertainment</p>
      </div>

      <div onClick={()=>setCategory(17)} className={`side-links ${category===17?"active":""}`}>
           <img src={sports} alt="" /><p>Sports</p>
      </div>
      <div onClick={()=>setCategory(28)} className={`side-links ${category===28?"active":""}`}>
          <img src={tech} alt="" /><p>Technology</p>
      </div>
      <div onClick={()=>setCategory(10)} className={`side-links ${category===10?"active":""}`}>
         <img src={music} alt="" /><p>Music</p>
      </div>
      <div onClick={()=>setCategory(22)} className={`side-links ${category===22?"active":""}`}>
          <img src={blogs} alt="" /><p>Blogs</p>
      </div>
      <div onClick={()=>setCategory(25)} className={`side-links ${category===25?"active":""}`}>
          <img src={news} alt="" /><p>News</p>
      </div>
      
      <hr/>
      </div>
      <div className='subscribed-list'>
      <h3>Subscribed</h3>
      <div className='side-links'>
      <img src={jack} alt="" /> <p>jon</p>
</div>
<div className='side-links'>
      <img src={simon} alt="" /> <p>mrbeast</p>
</div>
<div className='side-links'>
      <img src={tom} alt="" /> <p>Justin Bieber</p>
</div>
<div className='side-links'>
      <img src={megan} alt="" /> <p>5-minutes crafts</p>
</div>
<div className='side-links'>
      <img src={cameron} alt="" /> <p>Nas daily</p>
</div>
    </div>
    </div>
    
  )
}

export default Sidebar;
