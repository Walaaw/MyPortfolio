import React, { useEffect, useState } from 'react'
import './About.scss'
import { images } from '../../constants'
import { easeInOut, motion } from 'framer-motion'
import { client ,urlFor } from '../../client.js'
import wrap from '../../components/wraper/wrap'
import MotionWrap from '../../components/wraper/MotionWrap'
 const About=()=> {
    const [data, setdata] = useState([])
  useEffect(() => {
   const query='*[_type=="abouts"]'
   client.fetch(query).then((data) =>{setdata(data);
  }).catch((error)=>{console.log(error.message);})
  }, []);
  return (
    <>
    <h2 className='head-text'> I Know That <span> Good Development <br/></span>
    Means <span>Good Business</span> </h2>
    <div className="app__profile">
    {data.map((item,idx)=> <motion.div
     whileInView={{opacity:[0,1]}}
     whileHover={{scale:1.1 }}
     transition={{ duration:0.5, ease:easeInOut}}
     className='about__item'
     key={idx}
    >
      <img src={urlFor( item.imgUrl)} alt="aboutImg" />
      <p className='bold-text' >{item.title}</p>
      <p className='p-text' >{item.description}</p>
    </motion.div>) }
    </div>
    </>  
  )
}
export default wrap(MotionWrap(About,"app__about") ,"about","app__whitebg") 