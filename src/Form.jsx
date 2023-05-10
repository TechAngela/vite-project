import { useState } from "react";
function Form(props) {
     const inputstyle={
          width: "100%",
  padding: "15px",
  margin: "5px 0 22px 0",
  display: "inline-block",
  border: "none",
  background:"#f1f1f1"
     }
     //structure of state 1. import 2. declare 3. create a function 4. state what a function will do
     // const [input , setInput] = useState("");
     // function handleInput(event){
     //      setInput(event.target.value);
     //      console.log(input);
     // }


     return (
     <div>
       
         <label>{props.lb} {props.ph}</label>
         <input onChange = {props.handleInput} style={inputstyle} type={props.input} placeholder={props.ph}  name={props.call} value={props.value}/>
       
     </div>
     )
   }
   

   export default Form;