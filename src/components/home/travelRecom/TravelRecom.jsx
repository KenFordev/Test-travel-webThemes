import React from "react";
import "./TravelRecom.css";
import Footer from "../Footer";

function TravelRecom({ dataTravel }) {
  return (
    <>
      {dataTravel.map((data) => (
        <div className="travel-main" key={data.id}>
          <div className="header-travel">
            <h2>{data.headName}</h2>
            <p>{data.subName}</p>
          </div>
          <div className="title-travel">
            <p>{data.title}</p>
          </div>
          <div className="travel-photoes">
            <img src={data.pic1} alt="" />
            <img src={data.pic2} alt="" />
          </div>
          <div className="travel-footer">
            <p>{data.location}</p>
            <p>{data.time}</p>
            <p>{data.tel}</p>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default TravelRecom;
