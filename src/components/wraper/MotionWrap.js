import React from 'react'
import { easeInOut, motion } from 'framer-motion'
const MotionWrap = (Component,className) => function HOC() {
  return (
   <>
   <motion.div whileInView={{opacity:[0,1] ,y:[100,50,0]}}
   transition={{delay:0.5,ease:easeInOut}}
   className={`${className} app__flex`}
   >
    <Component/>
   </motion.div>
   </>

  )
}

export default MotionWrap