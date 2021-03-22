import React, { useState } from "react";

function LoginForm(props) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    props.Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="inner-form">
        <h1>Put Login details</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
      </div>
      <button type="submit">LogIn</button>
    </form>
  );
}

export default LoginForm;
