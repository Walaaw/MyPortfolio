import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { client ,urlFor } from '../../client.js'
import wrap from '../../components/wraper/wrap'
import { AiFillEye ,AiFillGithub} from "react-icons/ai";
import { useState } from 'react'
import { useEffect } from 'react'
import './Work.scss'
import MotionWrap from '../../components/wraper/MotionWrap.js';
const Work = () => {
    const [works, setworks] = useState([]);
    const [filterworks, setfilterworks] = useState([])
    const [active, setactive] = useState("All");
    const [animateCard, setanimateCard] = useState({y:0,opacity:1})
    const [slice, setslice] = useState(6)
    const handleToggle=(item)=>{
     setactive(item);
     setanimateCard({y:100,opacity:0});
     setTimeout(()=>{
        setanimateCard({y:0,opacity:1});
        if (item==="all") {
            setfilterworks(works)
         }
         else{
          let newarray=works.filter((work)=>work.tags.includes(item));
          console.log(newarray);
          setfilterworks(newarray);
         }
     },500)
    
    }
    useEffect(() => {
        const query='*[_type=="works"]'
        client.fetch(query).then((data) =>{
            setfilterworks(data)
            setworks(data);
       }).catch((error)=>{console.log(error.message);})
       }, []);
  return (
   <>
    <h2 className='head-text'> My Creative <span>Portfolio </span> Section 
    </h2>
   <div className='app__works-filter' >
   {["all","Html&css","bootstrap","javaScript","jquery","React.js"].map((item,idx)=>
   <div key={idx} onClick={()=>{handleToggle(item)}} className={`app__works-filter-item app__flex ${active===item?'item-active':''}`}>
    {item}
   </div>)} 
   </div>
    <motion.div animate={animateCard} transition={{ duration:0.5,delayChildren:0.5}} className='app__works-portfolio'>
    {filterworks.slice(0,slice).map((item,idx)=> <div key={idx} className=' app__flex app__works-item'>
        <div className='app__works-image'>
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <motion.div transition={{duration:0.5,ease:easeInOut,staggerChildren:0.5}}
            whileHover={{opacity:[0,1]}}
             className="app__works-layer">
               <a href={item.projectLink} target="_blank">
               <motion.div ransition={{duration:0.5}}
                whileInView={{opacity:[0,1]}}
                whileHover={{scale:[1,0.9]}} 
                className="app__flex"
                >
                <AiFillEye/>
                </motion.div>
               </a>
               <a href={item.codeLink} target="_blank">
               <motion.div ransition={{duration:0.5}}
                whileInView={{opacity:[0,1]}}
                whileHover={{scale:[1,0.9]}} 
                className="app__flex"
                >
                <AiFillGithub/>
                </motion.div>
               </a>
            </motion.div>
        </div>
        <div className="app__works-desc app__flex">
            <h4 className='bold-text'>{item.title}</h4>
            <p className='p-text'>{item.description}</p>
            <div className='app__works-tag app__flex'>
              <p className='p-text'>{item.tags[1]}</p>
           </div>
        </div>
       </div>)} 
    </motion.div> 
    <button onClick={()=>{setslice(slice+4)}}>show more </button>
   </>
  )
}

export default wrap(MotionWrap( Work,"app__works"),"work","app__primarybg"); 