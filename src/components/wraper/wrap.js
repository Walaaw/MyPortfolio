import React from 'react'
import Dots from '../Dots/Dots'
import SocialMedia from '../SocialMedia/SocialMedia'

export const wrap=(Component,idName,className)=> function HOC() {
  return (
    <>
    <div id={idName} className={`app__container ${className}`} >
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copyright'>
                <p className='p-text' >@2022 walaa </p>
                <p className='p-text'> all right reversed</p>
            </div>
        </div>
        <Dots active={idName} />
    </div>
    </>
  )
}
export default wrap