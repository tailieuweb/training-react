import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useHistory, Redirect } from "react-router-dom";

// styles
import "./Login.scss";

// images
import GoogleIcon from "../../images/google_icon.svg";
import FacebookIcon from "../../images/facebook_icon.svg";
import InputLogin from "./InputLogin";

const Login = () => {
  const history = useHistory();
  // server facebook tu tra ve token va minh lay token do set cho user
  const responseFacebook = async (res) => {
    if (res.status !== "unknown") {
      localStorage.setItem("accessToken", res.accessToken);
      history.replace("/");
      console.log(res);
    }
  };

  const responseGoogle = async (res) => {
    console.log(res);
    if (res.profileObj.name) {
      localStorage.setItem("accessToken", res.accessToken);
      history.replace("/");
      console.log('dang nhap thanh cong voi google: ',res);
    }
  };

  if (localStorage.getItem("accessToken")){
    return <Redirect to="/" />;
  } 

  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LeftSection"></div>
        <div className="RightSection">
          <h2 className="LoginTitle">Login With</h2>
          
          <InputLogin redirectToHome={() => history.replace("/")} />
          
          <h5>Or With</h5>

          <FacebookLogin
            appId="697907107494542"
            textButton="FACEBOOK"
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="gg-login-btn">
                <span
                  className="icon"
                  style={{
                    backgroundImage: `url(${FacebookIcon})`,
                  }}
                ></span>
                <span className="text">Facebook</span>
              </button>
            )}
          />
    {/* clientId="738277559607-qmkk4k8rared9tltub646d02oq8bvkuf.apps.googleusercontent.com" */}
          <GoogleLogin
            clientId="197407303524-f80qnrqh5nfj78c7oriiba673od0s7jo.apps.googleusercontent.com"
            buttonText="GOOGLE"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="gg-login-btn"
              >
                <span
                  className="icon"
                  style={{
                    backgroundImage: `url(${GoogleIcon})`,
                  }}
                ></span>
                <span className="text">Google</span>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
