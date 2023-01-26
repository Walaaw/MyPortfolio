import React from 'react'
import wrap from '../../components/wraper/wrap'
import MotionWrap from '../../components/wraper/MotionWrap'
import { easeInOut, motion } from 'framer-motion'
import { useState } from 'react'
import { client ,urlFor } from '../../client.js'
import { useEffect } from 'react'
import {FaCertificate } from "react-icons/fa";
import './certificate.scss'
function Certificate() {
  const [data, setdata] = useState([])
  useEffect(() => {
   const query='*[_type=="certificate"]'
   client.fetch(query).then((data) =>{setdata(data);
  }).catch((error)=>{console.log(error.message);})
  }, []);
  return (
    <>
     <h2 className='head-text'> Licenses <span>&</span>
     Certificates</h2>
     <div className='app__certtifate-cards'>
      {data.map((item,idx)=> <motion.div
        key={idx}
        whileInView={{opacity:[0,1]}}
        whileHover={{scale:[1,1.02]}}
        transition={{duration:0.5,ease:easeInOut}}
        className='app__certtifate-card'>
            <div className='app__certtifate-card-img'>
              <img src={urlFor(item.imgurl)} alt="" />
              <div className='layer'>
              <a href="#" target="_blank">
               <motion.div ransition={{duration:0.5}}
                whileInView={{opacity:[0,1]}}
                whileHover={{scale:[1,1.2]}} 
                className="app__flex app__certificate-icon"
                >
               <a href={item.certificateLink} target="_blank"> <FaCertificate /></a>
                </motion.div>
               </a>
               </div>
            </div>
            <h5>{item.name}</h5>
            <div className='app__certtifate-card-info' >
              <p className='p-text' >{item.company}</p>
              <p className='p-text' >{item.year}</p>
            </div>
        </motion.div>)}
       
     </div>
    </>
  )
}

export default wrap(MotionWrap(Certificate,'app__certificate'),'certificate','app__primarybg') 