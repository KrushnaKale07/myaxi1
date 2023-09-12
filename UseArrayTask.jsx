import React, { useState } from 'react'

const UseArrayTask = () => {
    let [items, setItems] = useState([])
    console.log(items);

    let addItems=()=>{
        setItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={addItems}>Add Number</button>
      <ul>
        {
            items.map(data=>(
                <li key={data.id}>{data.value}</li>
            ))
        }
      </ul>
    </div>
  )
}
export default UseArrayTask;
