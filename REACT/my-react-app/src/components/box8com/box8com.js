import "./box8com.css"
import { useData } from "../../DataStore";





function Box8com(){

    const sampledatabox6 = useData();

    const uniqueCountries = [];
sampledatabox6.forEach((item) => {
  const existingCountry = uniqueCountries.find((country) => country.country === item.country);
  if (existingCountry) {
    if (item.likelihood > existingCountry.likelihood) {
      existingCountry.likelihood = item.likelihood;
    }
  } else {
    uniqueCountries.push({ country: item.country, likelihood: item.likelihood });
  }
});

uniqueCountries.sort((a, b) => b.likelihood - a.likelihood);


    return( 
        <div className="box8com">
            <div className="headingbox8">
                <div>
                    <h3> Country Rankings</h3>
                    <span>Top Countries for a Promising Future</span>
                    
                </div>
                <div className="verticaldotbox8">
                    <button className="vertical-dot"> </button>
                </div>
            </div>
            {uniqueCountries.slice(0,6).map((item) =>(
            <div className="data_box8" key={item.id}>

                <div className="itemsbox8">

                    <img src="./icon/app.svg" alt=""></img>
                   
                    <div className="itemname">
                        <span>{item.country}</span>
                    </div>
                </div>
                <span className="data"> {item.likelihood} </span>
            </div>
            ))}

        </div>
    );


}

export default Box8com;