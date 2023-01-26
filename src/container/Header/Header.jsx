import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import wrap from '../../components/wraper/wrap'
const Header =()=> {
  return (
   <>
   <div className='app__header'>
    <div className='app__header-box' >
    <motion.div 
    whileInView={{ x:[-100,0],opacity:[0,1]}}
    transition={{duration:0.8 ,ease:'easeOut'}}
    className=' app__header-badge'>
        <span>👋</span>
        <div>
        <p> hello I am</p>
        <h1> walaa mahmoud</h1>
        </div>
    </motion.div>
    <motion.div 
        whileInView={{ x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.8 ,ease:'easeOut'}}
        className=' app__header-info'>
        <p> Frontend developer</p>
        <p> ui developer</p>
    </motion.div>
    </div>
    <motion.img  transition={{duration:0.8 ,ease:'easeOut'}} whileInView={{scale:[0,1]}} className="app__header-circle" src={images.circle} alt='circle' />
    <motion.div transition={{duration:1 ,ease:'easeOut'}} whileInView={{scale:[0,1],opacity:[0,1]}} className="app__header-circles" >
        {[images.react,images.redux,images.sass].map((item ,idx)=> <div key={idx}>
            <img src={item} alt="img" />
        </div>)}
    </motion.div>
   </div>
   </>
  )
}
export default wrap( Header,"home")