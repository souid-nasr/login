import React from "react";
import LoginModal from "react-login-modal";

const handleSignup = (username, email, password) => {};
const handleLogin = (username, password) => {}
function Login() {
  return (
    <div>
         <LoginModal
        handleSignup={handleSignup}
        handleLogin={handleLogin}
        buttonColor={"#52AE64"}
        disabledButtonColor={"#C7E4CD"}
        buttonHoverColor={"#A7D5B0"}
        fontFamily={"roboto"}
        errorMessage={"Incorrect username or password"}
        errorEnable={true}
      />

    </div>
  )
}

export default Login
