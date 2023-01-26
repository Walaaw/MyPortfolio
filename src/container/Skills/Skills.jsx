import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { client ,urlFor } from '../../client.js'
import wrap from '../../components/wraper/wrap'
import { useState } from 'react'
import { useEffect } from 'react'
import './Skills.scss'
import MotionWrap from '../../components/wraper/MotionWrap.js'
const Skills = () => {
    const [skills, setskills] = useState([])
    const [experience, setexperience] = useState([]);
    useEffect(() => {
        const querySkills='*[_type=="skills"]'
        const queryExperience='*[_type=="experiences"]'
        client.fetch(querySkills).then((data) =>{
            setskills(data)
       }).catch((error)=>{console.log(error.message);})
       client.fetch(queryExperience).then((data) =>{
        setexperience(data)
   }).catch((error)=>{console.log(error.message);})
       }, []);
  return (
    <>
    <h2 className='head-text'>Skills <span> &</span> Experiences  </h2>
    <div className='app__skils-container' >
        <motion.div className="app__skills-list" >
            {skills.map((item,idx)=><motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, ease:easeInOut}}
            whileHover={{scale:[1,0.9]}}
            key={idx} className='app__skills-item'>
                <div className=' app__skills-Image'>
                   <img src={urlFor(item.icon)} alt={item.name} />
                </div>
                <p className='p-text'>{item.name}</p>
            </motion.div>)}
        </motion.div>
        <motion.div className='app__skils-experience'>
            {experience.map((item,idx)=> <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, ease:easeInOut}}
            className='app__skills-item'>
                <div key={idx} className='app__skills-year'>
                <p>{item.year}</p>
                </div>
                <div>
                    {item.works.map((work,idx)=><div key={idx}
                    className="app__skills-title"
                    >
                        <h4>{work.name}</h4>
                        <p className='app__skils-company p-text'>{work.company}</p>
                        <p className='app__skills-desc p-text' style={{marginTop:"0.5rem"}} >{work.desc}</p>
                        </div>)}
            </div>
            </motion.div>)}
           
        </motion.div>
    </div>
    </>
  )
}

export default wrap( MotionWrap(Skills,"app__skills") ,"skills","app__whitebg")