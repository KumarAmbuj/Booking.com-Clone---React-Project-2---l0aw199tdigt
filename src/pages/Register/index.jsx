import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import {
  emailValidator,
  passwordValidator,
  mobileNumberValidator,
  nameValidator,
} from "../../Constant/constant";

import { useState } from "react";
import FlightRegisterSignInNavbar from "../../Component/FlightRegisterSignInNavbar";

function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "bookingportals",
  });
  const [message, setMessage] = useState({});
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function sendRegisterData() {
    try {
      //setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            ...registerData,
          }),
          headers: {
            projectId: "0f6ipegajht2",
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      //console.log("hwyyy", resultResponse);

      if (resultResponse.status === "success") {
        setMessage(resultResponse);

        setTimeout(() => {
          navigate("/signin");
        }, 1500);
      } else {
        setMessage(resultResponse);
        navigate("/register");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/register");
    } finally {
      //setIsLoader(false);
    }
  }

  function handleChange(e) {
    setMessage({});
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    //console.log(registerData);
    //
    if (
      emailValidator(registerData.email) &&
      passwordValidator(registerData.password) &&
      nameValidator(registerData.name)
    ) {
      sendRegisterData();
    } else {
      if (!passwordValidator(registerData.password)) {
        setPasswordError("password must be of length greater than equal to 5");
      }
      if (!emailValidator(registerData.email)) {
        setEmailError("Please input email in format");
      }
      if (!nameValidator(registerData.name)) {
        setNameError("Character must be greater than equal to 3");
      }
    }
  }

  return (
    <div>
      <FlightRegisterSignInNavbar />

      <div className="registerContainer">
        <div className="registerHeaderText">Sign in or create an account</div>
        <div className="registerInputBox">
          <div className="registerInputText">User name</div>
          <input
            type="text"
            placeholder="Enter your username"
            name="name"
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{nameError}</div>
          <div className="registerInputText">Email address</div>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{emailError}</div>
          <div className="registerInputText">User password</div>
          <input
            type="password"
            placeholder="Enter your email address"
            name="password"
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{passwordError}</div>
        </div>
        <div className="registerButton">
          <button onClick={handleSubmit}>Register</button>
        </div>

        <div
          className={`registerMessage ${
            message?.status === "success" ? "registerSuccess" : "registerFail"
          }`}
        >
          {message?.status === "success"
            ? "User successfully register"
            : message?.message}
        </div>

        <div className="haveAnAccount">
          Already have an account <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
