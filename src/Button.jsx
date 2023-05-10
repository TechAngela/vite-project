function Button(props){
     const b_style= {
         background: props.bg,
         color: "#fff",
         padding: "14px 20px",
         margin: "8px 0",
         border: "none",
         cursor: "pointer",
         width: "100%",
         opacity: "0.9"
         
     }
     return(   
          <>
         
               <button style={b_style} type={props.type}
               //  onClick={props.submit}  
                >{props.text} </button>
          </>
         )
    }

    export default Button;