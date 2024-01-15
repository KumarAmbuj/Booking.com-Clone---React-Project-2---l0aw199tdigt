import "./signin.css";
import { Link } from "react-router-dom";
function Signin() {
  return (
    <div>
      <div className="registerNavbar">
        <div className="registerLogoIcon">
          <div className="registerLogo">Booking.com</div>
          <div className="registerIcon">
            <div className="indianFlag">
              <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png" />
            </div>
            <div className="questionMark">
              <i class="fa fa-question-circle"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="registerContainer">
        <div className="registerHeaderText">Sign in or create an account</div>
        <div className="registerInputBox">
          <div className="registerInputText">Email address</div>
          <input type="email" placeholder="Enter your email address" />
          <div className="registerInputText">User password</div>
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="registerButton">
          <button>Sign in</button>
        </div>

        <div className="haveAnAccount">
          Already have an account <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;
