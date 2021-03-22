import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
function App() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const Login = (details) => {
    setUserDetails(details);
  };
  const LogOut = () => {
    setUserDetails({ email: "", password: "" });
  };
  return (
    <div className="App">
      {userDetails.email && userDetails.password ? (
        <div className="login-success">
          <h1>Welcome {userDetails.email}</h1>
          <button onClick={LogOut}>Log Out</button>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;
