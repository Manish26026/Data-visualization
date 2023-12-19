


import "./box7com.css";
import { useData } from "../../DataStore";
import React, { useState } from "react";

function Box7com() {
  const sampledatabox6 = useData();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const uniqueCountries = [];
  sampledatabox6.forEach((item) => {
    const existingCountry = uniqueCountries.find((country) => country.country === item.country);
    if (existingCountry) {
      if (item.topic > existingCountry.topic) {
        existingCountry.topic = item.topic;
      }
    } else {
      uniqueCountries.push({ country: item.country, topic: item.topic });
    }
  });

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    console.log("cliced usususu", country)
  };

  return (
    <div className="box7com">
      <div className="headingbox7">
        <div>
          <h3>Segmentation</h3>
          <span class="blinking-text">Click on country to view topic</span>
        </div>
        <div className="verticaldotbox7">
          <button className="vertical-dot"> </button>
        </div>
      </div>
      {uniqueCountries.slice(0, 6).map((item) => (
        <button className="data_box7 block" key={item.country} onClick={() => handleCountryClick(item.country)}>
          <div className="itemsbox7">
            <img src="./icon/app.svg" alt="" />
            <div className="itemname">
              <span>{item.country}</span>
            </div>
          </div>
          <span className="data">{selectedCountry === item.country ? item.topic : ''}</span>
          
        </button>
      ))}
    </div>
  );
}

export default Box7com;
