import React,{useState} from 'react'


const Calculator = () => {
 const [num1,setNum1]=useState();
 const [num2,setNum2]=useState();
 const [total,setTotal]=useState()

const getTotal = () => {
   const number1=parseInt(num1);
    const number2=parseInt(num2)  
   let total= number1+number2;
   setTotal(total);
 }

 return (
     <div>

     <h1>  {total == null ?"Total":total} </h1>
     <label for="num1">Number1:&nbsp;<input type="text" value={num1} onChange= {e => setNum1(e.target.value)}/></label> 
     &nbsp;&nbsp;&nbsp;
     <label for="num2">Number2:&nbsp;<input type="text" value={num2} onChange= {e => setNum2(e.target.value)} /> </label>
     
     <hr></hr>

     <div> 
     <button onClick={getTotal}> Add Numbers </button>
     </div>

     </div>
 )
}
 
 
export default Calculator