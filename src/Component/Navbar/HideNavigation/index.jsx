import "./hideNavigation.css";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function HideNavigation(props) {
  const { logout, isLoggedIn } = useContext(AuthContext);
  function handleLogout() {
    logout();
  }
  return (
    <div className="hideNavigationContainer">
      <div className="crossButton">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={props.onclick}
        ></i>
      </div>

      <div className="more">More</div>

      <div className="hideMenuItem">
        {!isLoggedIn ? (
          <>
            <div className="hideMenuName">
              <Link to="/register">
                {" "}
                <button>Register</button>
              </Link>
            </div>
            <div className="hideMenuName">
              <Link to="/signin">
                {" "}
                <button>Signin</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="hideMenuName">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Indian Rupee</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <img
            src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png"
            style={{ height: "25px", width: "25px", borderRadius: "50%" }}
          />
        </div>
        <div className="hideMenuName">Indian Rupee</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Genius loyalty programme</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">List your property</div>
      </div>
      <div className="menuHeader">Help and support</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Customer service help</div>
      </div>

      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Grievance officer</div>
      </div>

      <div className="menuHeader">Inspiration</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-rtl-flip="true"
            height={"25px"}
            width={"25px"}
          >
            <path d="M21 22.5H5.25a1.5 1.5 0 0 1-1.5-1.5.75.75 0 0 0-1.5 0 3 3 0 0 0 3 3H21a.75.75 0 0 0 0-1.5zM6 0a3.75 3.75 0 0 0-3.75 3.75V21h1.5a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 0 0-1.5-1.5H6zm0 1.5h14.25V18h-15a3 3 0 0 0-3 3c0 1 1.5 1 1.5 0V3.75A2.25 2.25 0 0 1 6 1.5zm14.25 21.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Travel articles</div>
      </div>

      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3A.75.75 0 0 0 6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zM21 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 4.5a3 3 0 0 1 3 3v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5A4.5 4.5 0 0 0 19.5 9a.75.75 0 0 0 0 1.5zm-5.25-6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Travel communities</div>
      </div>

      <div className="menuHeader">Settings and legal</div>

      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
          </svg>
        </div>
        <div className="hideMenuName">About Booking.com</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M23.883 23.317l.1-1.122a3.75 3.75 0 0 0-2.921-4l-3.651-.81.587.732v-5.742a2.627 2.627 0 0 0-2.628-2.626c-.05 0-.05 0-.098.002-1.373-.008-2.517 1.125-2.524 2.53 0 .064 0 .064.003.13l-.001 9.165 1.2-.6-1.477-1.108a2.283 2.283 0 0 0-3.197 3.194l.476.634a.75.75 0 0 0 1.2-.9l-.475-.633a.782.782 0 0 1 1.097-1.094l1.476 1.107a.75.75 0 0 0 1.2-.6v-9.2l-.002-.088a1.043 1.043 0 0 1 1.048-1.038l.075-.001c.622 0 1.127.504 1.127 1.126v5.742a.75.75 0 0 0 .587.732l3.651.811a2.25 2.25 0 0 1 1.753 2.4l-.1 1.123a.75.75 0 1 0 1.494.134zM6.75 18.57h-4.5a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 0 1.5 0V2.25A2.25 2.25 0 0 0 15.75 0H2.25A2.25 2.25 0 0 0 0 2.25v15.57a2.25 2.25 0 0 0 2.25 2.25h4.5a.75.75 0 0 0 0-1.5zm4.125-12.195a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm-1.027 3.17A5.296 5.296 0 0 0 8.998 9a5.235 5.235 0 0 0-4.93 3.502 5.278 5.278 0 0 0-.306 1.744.75.75 0 0 0 1.5.008c.002-.427.077-.85.22-1.252a3.736 3.736 0 0 1 3.52-2.502 3.796 3.796 0 0 1 1.684.39.75.75 0 0 0 .662-1.345zM4.5 15h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Careers</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">INR</div>
        <div className="hideMenuName">Become an affiliate</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-rtl-flip="true"
            height={"25px"}
            width={"25px"}
          >
            <path d="M22.5 6v14.25a1.5 1.5 0 0 1-3 0V3A2.25 2.25 0 0 0 17.25.75h-15A2.25 2.25 0 0 0 0 3v17.25a3 3 0 0 0 3 3h18a.75.75 0 0 0 0-1.5H3a1.5 1.5 0 0 1-1.5-1.5V3a.75.75 0 0 1 .75-.75h15A.75.75 0 0 1 18 3v17.25a3 3 0 1 0 6 0V6a.75.75 0 0 0-1.5 0zm-18 9.75H15a.75.75 0 0 0 0-1.5H4.5a.75.75 0 0 0 0 1.5zm0 3h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zm9.75-10.5v2.25h-9V6h9v2.25zm1.5 0V6a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 3.75 6v4.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V8.25z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Press centre</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M20.973 8.239a2.996 2.996 0 0 1-2.998-2.994v-.02a.75.75 0 0 0-1.207-.6 2.966 2.966 0 0 1-1.797.614 2.997 2.997 0 0 1-2.754-4.182.75.75 0 0 0-.72-1.045C4.883.28-.262 5.86.007 12.476c.268 6.615 5.849 11.76 12.464 11.492 6.615-.269 11.76-5.85 11.492-12.464a11.988 11.988 0 0 0-.562-3.172.75.75 0 0 0-1.064-.434c-.421.222-.89.339-1.366.341zm.003 1.5a4.458 4.458 0 0 0 2.06-.515l-.35-.663-.714.229c.288.898.453 1.832.491 2.774.235 5.788-4.266 10.67-10.054 10.905-5.787.235-10.67-4.266-10.905-10.054C1.27 6.628 5.771 1.745 11.558 1.51l-.03-.749-.689-.296a4.497 4.497 0 0 0 4.135 6.274 4.467 4.467 0 0 0 2.708-.924l-.457-.595-.75-.005v.03a4.496 4.496 0 0 0 4.498 4.494zm-12.003.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm4.5 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-9.373 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm6.058-6.755a.375.375 0 1 1 .31-.43.376.376 0 0 1-.31.43h-.002a.75.75 0 0 0-.236-1.48h-.005a1.124 1.124 0 1 0 .364 2.22 1.125 1.125 0 0 0-.361-2.22.75.75 0 0 0 .24 1.48zm6 3a.375.375 0 1 1-.12-.74.375.375 0 0 1 .12.74.75.75 0 0 0-.24-1.48 1.125 1.125 0 1 0 .361 2.22 1.125 1.125 0 0 0-.361-2.22.75.75 0 0 0 .24 1.48z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Privacy & cookies</div>
      </div>
      <div className="hideMenuItem">
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-6 3v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-.75-6.689a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM3.75 7.5h10.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm0 4.5h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zm0 4.5H7.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm3.75 3H2.25a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h10.629a.75.75 0 0 1 .53.22L16.28 4.59c.14.14.219.331.219.53V7.5a.75.75 0 0 0 1.5 0V5.121a2.25 2.25 0 0 0-.659-1.59L14.47.659A2.25 2.25 0 0 0 12.88 0H2.25A2.25 2.25 0 0 0 0 2.25v16.5A2.25 2.25 0 0 0 2.25 21H7.5a.75.75 0 0 0 0-1.5z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Terms and conditions</div>
      </div>
      <div className="hideMenuItem" style={{ marginBottom: "30px" }}>
        <div className="hideMenuName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={"25px"}
            width={"25px"}
          >
            <path d="M1.5 6.75h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zm1.466 11.474l3.75-12H5.284l3.75 12a.75.75 0 0 0 1.432-.448l-3.75-12c-.22-.701-1.213-.701-1.432 0l-3.75 12a.75.75 0 0 0 1.432.448zM9.75 18a3.75 3.75 0 1 1-7.5 0l-.75.75h9L9.75 18zm1.5 0a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75 5.25 5.25 0 1 0 10.5 0zm3.716.224l3.75-12h-1.432l3.75 12a.75.75 0 0 0 1.432-.448l-3.75-12c-.22-.701-1.213-.701-1.432 0l-3.75 12a.75.75 0 0 0 1.432.448zM21.75 18a3.75 3.75 0 1 1-7.5 0l-.75.75h9l-.75-.75zm1.5 0a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75 5.25 5.25 0 1 0 10.5 0zM12.75 6V1.5a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
          </svg>
        </div>
        <div className="hideMenuName">Legal</div>
      </div>
    </div>
  );
}
export default HideNavigation;
