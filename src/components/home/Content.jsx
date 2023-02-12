import React from "react";
import "./Content.css";
import Footer from "./Footer";

//Photoes Imported
import TravelImgae from "../../../public/images/bg-travel.jpg";
import Travel1 from "../../../public/images/travel1.jpg";
import TravelRecom from "./travelRecom/TravelRecom";

//Data imported
import dataTravel from "../../dataTravel/dataTravel";

function Content({ colorTheme }) {
  return (
    <>
      <div className={`content-bg ${colorTheme}`}>
        <div className="container">
          <div className="content-con">
            <div className="content-img">
              <img src={TravelImgae} alt="" />
            </div>
            <div className="content-header-title">
              <p>
                ยินดีต้อนรับทุก ๆ คน ที่มีใจในการรักการท่องเที่ยว
                พลาดไม่ได้แล้วแหละที่จะมาเที่ยวกับแอดในวันนี้
                ซึ่งก็เหมือนอย่างเคยค่ะ ที่แอดคนนี้จะพาทุก ๆ คน ไปเที่ยวทุกซอก
                ทุกมุม ทุกหนแห่ง ทั่วประเทศไทย อย่างในวันนี้ แอดจะพาทุกคนไป
                เที่ยวกำแพงเพชร กันค่ะ หนึ่งในจังหวัดที่ควรค่าแก่การไปเยือนมาก ๆ
                อย่างที่เรารู้กันดีว่า ที่เที่ยวกำแพงเพชร มีเยอะมาก ๆ และสวยมาก
                ๆ อีกด้วย แต่ในวันนี้แอดได้คัดเลือก กำแพงเพชรที่เที่ยว ที่ปัง ๆ
                ปุริเย่ มาทั้งนั้นค่ะ มันปังมากจนทำให้คนที่มาอ่าน
                สถานที่ท่องเที่ยวกำแพงเพชร ในวันนี้ ร้องว้าว ๆ ๆ ๆ
                จนต้องลุกขึ้นเก็บกระเป๋าเดินทางไปยัง จังหวัดกำแพงเพชร แน่นอนค่ะ
                แต่ก่อนที่เราจะไป เที่ยวกำแพงเพชร กันนั้น เรามาทำความรู้จักกับ
                จังหวัดกำแพงเพชร กันก่อนสักเล็กน้อยดีกว่าค่ะ
              </p>
            </div>
            <div className="content-title-recom">
              <img src={Travel1} alt="" />
              <TravelRecom dataTravel={dataTravel} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
