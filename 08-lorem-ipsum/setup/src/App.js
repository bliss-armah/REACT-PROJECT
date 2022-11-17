import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count,setCount] = useState(0)
  const [paragraph,setParagraph] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = count
    if (count <= 0) {
      amount =1
    }
    if (count > 8) {
      amount = 8
    }
    setParagraph(data.slice(0,amount))
  }

  const removePara = (index) => {
    { paragraph.filter((para) => para.index !== index) }
    setCount([...paragraph,removePara])
  }
  return (

    <section className='section-center'>
      <h3>  tired of boring lorem ipsum? </h3>
      <h3>hahahaa! </h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraph:
        </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      

      <article className='lorem-text'>
        {paragraph.map((text, index) => {
          return (
            <p key={index}>{text} <button className='btn' onClick={()=>removePara(index)}>clear items</button></p>
            
          )
          
        }
        )
          
        }
        
        <button className='btn'>remove item</button>
      </article>
    </section>
    )
}

export default App;
