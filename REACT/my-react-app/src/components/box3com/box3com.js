import "./box3com.css";
import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { useData } from "../../DataStore";


  



function Box3com() {

    const sampledDatabox3 = useData();
  
    const sampleSizebox3 = 7;
    const step = Math.floor(sampledDatabox3.length / sampleSizebox3);
  
    const sampledDatabox3r = sampledDatabox3.filter(
      (_, index) => index % step === 0
    ); 
  return (
    <>
    <div className="box3com">
        <img className="box3img" src="./icon/market-research-icon.svg" alt="why?"/>
        <div className="box3text">
            <h3>GROWTH</h3>
            <span>Livelihood</span>
        </div>
        

     
    </div>

      <div className="chartbox3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={sampledDatabox3r}
            width={250}
            height={190}
        
          >
            <Tooltip />
            <Area className="nn" type="monotone" dataKey="likelihood" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      
     </div>
      </>
  );
}

export default Box3com;
