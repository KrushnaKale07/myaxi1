import React, { useState } from 'react'

const UserObject = () => {
    let [name,setName]=useState({firstName:"",lastnName:"", date:"",age:0,status:""});

    const currentDate = new Date();

    let checkEligiblity = () =>{

      const birth = new Date(name.date);
      const age = currentDate.getFullYear() - birth.getFullYear()

    
    console.log(age);

    if(age>= 18)
    {
      setName({...name,status : "you are eligible for vote"})
    }
    else(
      setName({...name,status : "you are not eligible for vote"})
    )
    }

  return (
    <div>
      <form action=''>
        <input type='text' placeholder='Fname' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' placeholder='Lname' value={name.lastnName} onChange={e=>setName({...name,lastnName:e.target.value})}/>
        <input type='text' placeholder='Date' value={name.date} onChange={e=>setName({...name,date:e.target.value})}/>
        {/* <input type='text' placeholder='Date' value={name.date} onChange={e=>setName({...name,date:e.target.value})}/> */}
        <h2>Your FirstName is {name.firstName}</h2>
        <h2>Your LastName is {name.lastnName}</h2>
        {/* <h2>Your Date is {name.date}</h2> */}
        <h2>Date of Birth {name.date}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
      <button onClick={()=>{checkEligiblity()}}>checkAge</button>
      <h3>{name.status}</h3>
    </div>
  )
}

export default UserObject;
