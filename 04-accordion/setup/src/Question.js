import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, info, title }) => {
  
  const [show, setShow] = useState(false)
  const revealInfo = () => {
    setShow(!show)
  }
  return (
    <article className='question'>
      <header>
        {title}
        <button className="btn" onClick={revealInfo}>
         {show ?<AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {
        show &&
        <p>{info}</p>
      }
    </article>
  )
};

export default Question;
