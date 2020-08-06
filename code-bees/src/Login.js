import React from 'react';
import './Login.css';
function Login() {
  return (
    <div className="login_page">
    <img src="https://raw.githubusercontent.com/laxminagln/CodeBees/master/cbt.png?token=AIFJEBVN5RX5TTI5DMLJH7C7GTZRY" className="login_image" />
      <form className="login_form">
        <input type="text" placeholder="Type your email" className="login_email" />
        <input type="password" placeholder="Type your password" className="login_password" />
        <div className="login_button">
          <button type="submit" className="login_buttonReg">Register</button>
          <button type="submit" className="login_buttonSub">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
