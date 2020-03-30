import React from "react";
import "./Login.css";
// import wave from "./assests/img/wave.png";
// import profile from "./assests/img/avatar.svg";
// import background from "./assests/img/background.svg";

class Login extends React.Component {
  componentDidMount() {
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }
  render() {
    return (
      <div className="login-container">
        <img className="wave" src="img/wave.png" alt="wave" />
        <div className="login-outside-container">
          <div className="img">
            <img src="img/clinic.svg" alt="background" />
          </div>
          <div className="login-inside-container">
            <form>
              <img className="avatar" src="img/profile.svg" alt="avatar" />
              <h2>Xin Chào</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h5>Tên đăng nhập</h5>
                  <input className="input" type="text" />
                </div>
              </div>
              <div className="input-div two">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div>
                  <h5>Mật khẩu</h5>
                  <input className="input" type="password" />
                </div>
              </div>
              <a href="#">Bạn quên mật khẩu?</a>
              <input type="submit" className="login-btn" value="Đăng nhập" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
