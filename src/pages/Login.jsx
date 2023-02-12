import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/home/Header";
import "./Styles.css";

function Login() {
  const regexPhoneNumber = /^(0[689]{1})+([0-9]+)/g;
  const regexPwd = /^([A-Z][a-z]+)([0-9]+)/g;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [checkedUserName, setCheckedUserName] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);

  const onChangeHandleUserName = (e) => {
    setUserName(e.target.value);
    if (userName !== "" && !userName.match(regexPhoneNumber)) {
      setCheckedUserName(true);
    } else {
      setCheckedUserName(false);
    }
  };

  const onChangeHandlePassWord = (e) => {
    setPassword(e.target.value);
    if (password !== "" && !password.match(regexPwd)) {
      setCheckedPassword(true);
    } else {
      setCheckedPassword(false);
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (
      userName !== "" &&
      password !== "" &&
      checkedUserName === false &&
      checkedPassword === false
    ) {
      alert(`เข้าสู่ระบบเรียบร้อย`);
    } else {
      alert(`กรอกข้อความด้วยครับ`);
    }
  };

  return (
    <div>
      <Header />

      <div className="form-main">
        <h2>Login Form</h2>

        <form onSubmit={onSubmitHandle} className="form-con">
          <div className="form-con-main">
            <div className="form-layout">
              <label htmlFor="username" className="form-label">
                Username :
              </label>
              <input
                type="text"
                placeholder="Enter ur username"
                className="form-input"
                maxLength={10}
                value={userName}
                onChange={onChangeHandleUserName}
              />
            </div>
            {checkedUserName ? (
              <p
                style={{
                  color: "red",
                  fontSize: "10px",
                  textAlign: "center",
                  paddingLeft: "1.3rem",
                  marginTop: ".3rem",
                }}
              >
                โปรดกรอกข้อมูลให้ถูกต้อง
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div className="form-con-main">
            <label htmlFor="pwd" className="form-label">
              Password :
            </label>
            <input
              type="password"
              placeholder="Enter ur password"
              className="form-input"
              value={password}
              onChange={onChangeHandlePassWord}
            />
            {checkedPassword ? (
              <p
                style={{
                  color: "red",
                  fontSize: "10px",
                  textAlign: "center",
                  paddingLeft: "5rem",
                  marginTop: ".3rem",
                }}
              >
                ภาษาอังกฤษ, ขึ้นต้นด้วยตัวพิมพ์ใหญ่, พิมพ์เล็ก, ตัวเลข
              </p>
            ) : (
              <p></p>
            )}
          </div>

          <div className="btn-main">
            <button type="submit" className="btn-form">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
