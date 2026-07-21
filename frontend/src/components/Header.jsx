import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header(){

  const navigate = useNavigate();


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );



  function logout(){

    localStorage.removeItem("user");

    setUser(null);

    navigate("/");

  }




  function goHome(){

    localStorage.removeItem("lastSearch");

    window.location.href="/home";

  }



  return (

    <header className="smart-header">


      <div className="header-left">


        <button onClick={goHome}>
          Home
        </button>



        <button onClick={()=>navigate("/compare")}>
          Compare
        </button>


      </div>





      <div className="smart-logo">


        <span className="logo-icon">
          🛒
        </span>


        <span>
          SmartPick
        </span>


      </div>





      <div className="header-right">


      {
        user ? (

          <>

            <button onClick={()=>navigate("/profile")}>

              Profile

            </button>



            <button onClick={logout}>

              Logout

            </button>


          </>


        ) : (

          <>

            <button onClick={()=>navigate("/login")}>

              Login

            </button>



            <button onClick={()=>navigate("/register")}>

              Register

            </button>


          </>

        )
      }


      </div>


    </header>

  );

}


export default Header;