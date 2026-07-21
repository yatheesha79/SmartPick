import { useNavigate } from "react-router-dom";


function Profile(){

  const navigate = useNavigate();


  const user = JSON.parse(
    localStorage.getItem("user")
  );


  function logout(){

    localStorage.removeItem("user");

    navigate("/");

  }



  return (

    <div className="profile-page">


      <div className="profile-card">


        <h1>
          👤 My Profile
        </h1>


        <div style={{
          marginTop:"25px",
          textAlign:"left"
        }}>


          <h3>
            Username
          </h3>

          <p>
            {user?.username || "User"}
          </p>



          <h3 style={{
            marginTop:"20px"
          }}>
            Account Type
          </h3>

          <p>
            SmartPick Member
          </p>



          <h3 style={{
            marginTop:"20px"
          }}>
            Status
          </h3>

          <p>
            ✅ Active
          </p>



        </div>



        <button 
          onClick={logout}
          style={{
            marginTop:"25px"
          }}
        >

          Logout

        </button>


      </div>


    </div>

  );

}


export default Profile;