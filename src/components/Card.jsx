import React, { useState } from "react";
import "./Card.css";
const MyCard = (props) => {
  const { data } = props;
  const [Data, setData] = useState(data);
  const [bool, setBool] = useState(false);

  function deleteTour(id) {
    const tours = Data.filter((item, index) => {
      return id !== index;
    });
    setData(tours);
    console.log(tours);
  }
  if (!Data.length) {
    return (
      <div className="header_container">
        <p> our tours </p>
        <div className="underline"> </div>
        <span className="text_reflesh">
          {" "}
          you deleted all the cities. Click the refresh button to return the
          list of cities{" "}
        </span>
        <button
          onClick={() => {
            setBool(!bool);
          }}
          className="reflesh_btn"
        >
          {" "}
          reflesh{" "}
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header_container">
          <p> our tours </p>
          <div> </div>
        </div>
        <main className="main_container">
          {Data.map((element, index) => {
            const { id, price, image, title, info } = element;
            return (
              <div key={id} className="city_container">
                <div className="container_header">
                  <div className="price">{`$${price}`}</div>
                  <img src={image} alt=" london " />
                </div>
                <div className="info_container">
                  <h3> {title} </h3>
                  <div className="main_text">
                    <p>
                      {" "}
                      {bool ? info : `${info.substring(0, 200)}...`}
                      <button
                        onClick={() => {
                          setBool(!bool);
                        }}
                        className="length_btn"
                      >
                        {bool ? "show less" : "read more"}
                      </button>{" "}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      deleteTour(index);
                    }}
                    className="delete_btn"
                  >
                    {" "}
                    not interested{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
};

export default MyCard;
