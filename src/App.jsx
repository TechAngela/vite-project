import Form from "./Form.jsx"
import Button from "./Button.jsx"
import "./App.css";
import { useState } from "react";


function App() {
  const [submit , setSubmit] = useState({
   email: '',
   password: '',
   rePassword: '',
  });

  function handleChange(event){
    const value = event.target.value;
    setSubmit({...submit, [event.target.name]: value})
}
  function handleSubmit(event){
    event.preventDefault();
    console.log(submit);
  }
  return (
    <>
 
     <div className="app">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <form action="" onSubmit={handleSubmit}>
        <Form lb="Email" ph="Enter email" call="email" handleInput={handleChange} value={submit.email}/>
        <Form lb="Password" ph = "Enter password" call="password" handleInput={handleChange} value={submit.password}/>
        <Form lb="Repeat Password" ph="Repeat password" call="rePassword" handleInput={handleChange} value={submit.rePassword}/>
        <p>Remember me</p>
        <p>By creating an account you agree to our <a href="Terms & Privacy">Terms & Privacy</a> </p>
        <div className="b_style">
        <Button text="Cancel" bg="#f44336" type='button'/>
        <Button text="SignUp" bg= "#04AA6D" type='submit' />
        </div>
        </form>
      </div>
      
    </>
  )
}

export default App;
