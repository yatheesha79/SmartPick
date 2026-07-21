import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const navigate = useNavigate();


  async function login(){

    try{

      const response = await fetch(
        "http://localhost:5000/login",
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


      if(data.success){

        localStorage.setItem(
          "user",
          JSON.stringify({
            username: username
          })
        );


        setMessage("Login successful");


        setTimeout(()=>{

          navigate("/");

        },1000);


      }
      else{

        setMessage(data.message);

      }


    }
    catch(error){

      console.log(error);

      setMessage("Server error");

    }

  }


  return(

    <div>

      <h2>Login</h2>


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


      <button onClick={login}>
        Login
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


export default Login;