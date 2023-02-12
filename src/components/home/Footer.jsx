import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot-bg">
      <div className="container">
        <div className="foot-con">
          <div className="foot-con-item foot-l">
            <h2>ติดต่อโฆษณา</h2>
            <p>คุณฝ้าย</p>
            <a href="#">MARKETING@CHILLPAINAI.COM</a>
          </div>
          <div className="foot-con-item foot-cen">
            <p>
              inbox: <a href="#">https://chill.travel/inboxFB</a>
            </p>
            <p>
              LINE: @Chillpainai :{" "}
              <a href="#">https://chill.travel/LineChillpainai</a>
            </p>
          </div>
          <div className="foot-con-item foot-r">
            <h2>ติดต่อเรา</h2>
            <p>บริษัท ชิล มีเดีย จำกัด</p>
            <p>
              89 ซอยพหลโยธิน5 ถ.พหลโยธิน แขวง
              <br />
              พญาไท เขตพญาไท กรุงเทพ 10400
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
