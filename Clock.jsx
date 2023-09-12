import React,{useState} from "react";
import './App.css'

const Clock = () => {
   let ctime = new Date().toTimeString();

   const [time,setTime]=useState(ctime);

   let updateTime = ()=>{
    ctime = new Date().toTimeString();
    setTime(ctime);
   }

   setInterval(updateTime,1000)

   return(
    <div>
        {time}
    </div>

   )
}
export default Clock;