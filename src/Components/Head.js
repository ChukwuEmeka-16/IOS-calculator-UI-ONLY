import React,{useState} from 'react'

const Head = () => {
    const [first, setfirst] = useState(10000)
  return (
    <div className='Calc-Head'>
      <div className="state">{first}</div>
       
    </div>
  )
}

export default Head
