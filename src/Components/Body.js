import React from 'react'

const Body = () => {
    const calcItems = ['AC ','+/-' , '%' ,'/',7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'.','=']
  return (
    <div className='Calc-Body'>
      {
        calcItems.map((item,index)=>{
            return <div>{item}</div>
        })
      }
     


    </div>
  )
}

export default Body
