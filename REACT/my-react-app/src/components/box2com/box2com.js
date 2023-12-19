import "./box2com.css"
import React from 'react';
import { BarChart, Bar } from "recharts";
import { useData } from "../../DataStore";





function Box2com(){

  const sampledDatabox2 = useData();

  const sampleSizebox2 = 7;
  const step = Math.floor(sampledDatabox2.length / sampleSizebox2);

  const sampledDatabox2r = sampledDatabox2.filter(
    (_, index) => index % step === 0
  ); 


    return( 
        <div className="box2com">
          <div className="box2text">
            <h1> Potency</h1>
          </div>
          <div className="box2chart">
           <BarChart width={200} height={130} data={sampledDatabox2r}>
      <Bar dataKey="intensity" fill="#8884d8" />
      
    </BarChart>
    </div>
          
            

                
    </div>
    );


}

export default Box2com;