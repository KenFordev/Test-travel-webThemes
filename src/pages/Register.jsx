import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/home/Header";

import "../components/register/register.css";

function Signin() {
  // const bankAccout = "^[0-9]{9,18}$";
  const regexEng = /^([a-zA-Z]+$)/gm;
  const regexThai = /^([ก-๏]+$)/gm;

  const [data, setData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [checkedFirstName, setCheckedFirstName] = useState(false);
  const [checkedLastName, setCheckedLastName] = useState(false);

  const onChangeHandleFristName = (e) => {
    setFirstName(e.target.value);
    if (
      firstName !== "" &&
      !firstName.match(regexEng) &&
      !firstName.match(regexThai)
    ) {
      setCheckedFirstName(true);
    } else {
      setCheckedFirstName(false);
    }
  };

  const onChangeHandleLastName = (e) => {
    setLastName(e.target.value);
    if (
      lastName !== "" &&
      !lastName.match(regexEng) &&
      !lastName.match(regexThai)
    ) {
      setCheckedLastName(true);
    } else {
      setCheckedLastName(false);
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!firstName.match(regexEng) && lastName.match(regexEng)) {
      alert("เลือกภาษาใดภาษาหนึ่ง!!");
    }
    if (!firstName.match(regexThai) && lastName.match(regexThai)) {
      alert("เลือกภาษาใดภาษาหนึ่ง!!");
    }
    if (firstName !== "" && lastName !== "") {
      alert(`สมัครสมาชิกเรียบร้อย `);
    } else {
      alert("กรอกข้อความด้วย");
    }
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <Header />
      <div className="form-main">
        <h2> Register Form</h2>

        <form onSubmit={onSubmitHandle} className="form-con">
          <div className="form-con-main">
            <div className="form-layout">
              <label htmlFor="fname" className="form-label">
                ชื่อ :
              </label>
              <input
                type="text"
                placeholder="Enter ur name"
                className="form-input"
                value={firstName}
                onChange={onChangeHandleFristName}
              />
            </div>
            {checkedFirstName ? (
              <p
                style={{
                  color: "red",
                  fontSize: "10px",
                  textAlign: "center",
                  paddingLeft: "5rem",
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
            <label htmlFor="lname" className="form-label">
              นามสกุล :
            </label>
            <input
              type="text"
              placeholder="Enter ur lastname"
              className="form-input"
              value={lastName}
              onChange={onChangeHandleLastName}
            />
            {checkedLastName ? (
              <p
                style={{
                  color: "red",
                  fontSize: "10px",
                  textAlign: "center",
                  paddingLeft: "5rem",
                  marginTop: ".3rem",
                }}
              >
                โปรดกรอกข้อมูลให้ถูกต้อง
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

export default Signin;
