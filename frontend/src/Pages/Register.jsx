import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const navigate = useNavigate();


  async function register(){

    try{

      const response = await fetch(
        "http://localhost:5000/register",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            username,
            password
          })
        }
      );


      const data = await response.json();


      setMessage(data.message);


      if(data.success){

        setTimeout(()=>{

          navigate("/login");

        },1500);

      }


    }
    catch(error){

      console.log(error);

      setMessage("Server error");

    }

  }


  return(

    <div>

      <h2>Create Account</h2>


      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />


      <br/><br/>


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <br/><br/>


      <button onClick={register}>
        Register
      </button>


      {
        message && (
          <p style={{
            marginTop:"15px",
            color:"green",
            fontWeight:"bold"
          }}>
            {message}
          </p>
        )
      }


    </div>

  );

}


export default Register;