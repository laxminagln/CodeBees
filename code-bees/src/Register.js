import React from 'react';
import './Register.css';
function Register() {
  return (
    <div className="login_page">
    <img src="https://raw.githubusercontent.com/laxminagln/CodeBees/master/cbt.png?token=AIFJEBVN5RX5TTI5DMLJH7C7GTZRY" className="login_image" />
      <form className="login_form">
        <input type="text" placeholder="Type your email..." className="login_email" />
        <input type="password" placeholder="Type your password..." className="login_password" />
        <div className="login_details">
        <input type="text" placeholder="Type your name..." className="login_name" />
        <input type="text" placeholder="Type your GitHub Id..." className="login_github" />
        </div>
        <div className="login_button">
          <button type="submit" className="login_buttonReg">Register</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
