import React from 'react'
import './Contacts.scss'
import { images } from '../../constants'
import wrap from '../../components/wraper/wrap'
import MotionWrap from '../../components/wraper/MotionWrap'
import { useState } from 'react'
import { client } from '../../client.js'
const Contacts = () => {
  const [formInputs, setformInputs] = useState({name:'',email:'',message:''})
  const [isloading, setisloading] = useState(false);
  const [issubmetted, setissubmetted] = useState(false);
  const {name,email,message}=formInputs
  const handelInputsChange=(e)=>{
  const {name,value}=e.target
   setformInputs({...formInputs,[name]:value})
    }
  const handelSubmit=()=>{
    
    setisloading(true);
    const contact={
      _type:'contact',
      name:name,
      email:email,
      message:message
    }
    client.create(contact).then(()=>{
      setisloading(false);
      setissubmetted(true);
    })
  }
  return (
    <>
   <h2 className='head-text'> Take A Coffee  <span>&</span>
   Chat With Me</h2>
    <div className='app__contact-cards'>
        <div className='app__contact-card' >
            <img src={images.email} alt="email" />
            <a className='p-text' href="mailto:walaamahmoud474@gmail.com">walaamahmoud474@gmail.com </a>
        </div>
        <div className='app__contact-card' >
            <img src={images.mobile} alt="mobile" />
            <a className='p-text' href="tel:+201129485464">+2 01129485464 </a>
        </div>
    </div>
    {!issubmetted? <div className='app__contact-form' >
        <div className='p-text app__contact-form-name'>
            <input type="text" placeholder='Your Name' name='name' value={name} onChange={handelInputsChange} />
        </div>
        <div className=' p-text app__contact-form-email'>
            <input type="email" placeholder='Your Email' name='email' value={email} onChange={handelInputsChange}/>
        </div>
        <div className='p-text app__contact-form-text-area'>
           <textarea placeholder='Message' name='message' value={message} onChange={handelInputsChange}  cols="30" rows="10"></textarea>
        </div>
        <button onClick={handelSubmit}>{isloading?'sending':'send message'}  </button>
      </div>:<div className='head-text'> <h3>thank you for getting in touch !  </h3></div>}
   
    </>
  )
}

export default  wrap(MotionWrap(Contacts,"app__contact") ,"contact","app__whitebg")