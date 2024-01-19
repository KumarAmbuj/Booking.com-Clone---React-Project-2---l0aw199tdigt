import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";

function Signin() {
  const { login, logout, SetToken, SetUserName } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    appType: "bookingportals",
  });
  const [message, setMessage] = useState({});

  async function sendSigninData() {
    try {
      //setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/login`,
        {
          method: "POST",
          body: JSON.stringify({
            ...signinData,
          }),
          headers: {
            projectId: "0f6ipegajht2",
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      console.log("hwyyy", resultResponse);

      if (resultResponse.status === "success") {
        login();
        SetToken(resultResponse.token);
        SetUserName(resultResponse.data.name);
        setMessage(resultResponse);

        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setMessage(resultResponse);
        navigate("/signin");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/signin");
    } finally {
      //setIsLoader(false);
    }
  }

  function handleChange(e) {
    setMessage({});
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    //console.log(signinData);
    //
    sendSigninData();
  }

  return (
    <div>
      {/* <div className="registerNavbar">
        <div className="registerLogoIcon">
          <div className="registerLogo">
            <Link to="/">Booking.com</Link>
          </div>
          <div className="registerIcon">
            <div className="indianFlag">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png" />
            </div>
            <div className="questionMark">
              <i class="fa fa-question-circle"></i>
            </div>
          </div>
        </div>
      </div> */}

      <FlightRegisterSignInNavbar />

      <div className="registerContainer">
        <div className="registerHeaderText">Sign in or create an account</div>
        <div className="registerInputBox">
          <div className="registerInputText">Email address</div>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            onChange={handleChange}
          />
          <div className="registerInputText">User password</div>
          <input
            type="email"
            placeholder="Enter your email address"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="registerButton">
          <button onClick={handleSubmit}>Sign in</button>
        </div>

        <div
          className={`registerMessage ${
            message?.status === "success" ? "registerSuccess" : "registerFail"
          }`}
        >
          {message?.status === "success"
            ? "User successfully Signed in"
            : message?.message}
        </div>

        <div className="haveAnAccount">
          Don't have an account <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;
