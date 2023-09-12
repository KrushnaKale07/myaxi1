import React, { useState } from 'react'

const UseStateArr = () => {
    let [items, setItems]= useState([10,20,30,40])

  return (
    <div>
      <h1>{items[3]}</h1>
    </div>
  )
}

export default UseStateArr;
