import React from "react";
import { useData } from "../../DataStore";
import "./box4com.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Box4com() {
  const sampledDatabox4 = useData();

  const sampleSizebox4 = 8;
  const step = Math.floor(sampledDatabox4.length / sampleSizebox4);

  const sampledDatabox4r = sampledDatabox4.filter(
    (_, index) => index % step === 0
  );

  return (
    <div className="box4com">
      <div className="heading">
        <div>
          <h2>Impactful Relevance</h2>
          <span>Intensity and Relevance in Focus</span>
        </div>
        <div></div>

        <div className="box4chart">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sampledDatabox4r}
                style={{ width: "100%", height: 300 }}
                margin={{top: 0, right: 0, left: 0, bottom: 0}}
              >
                <XAxis dataKey="intensity" />
                <YAxis dataKey="relevance" />
                <Tooltip />

                <Bar dataKey="relevance" fill="0E8388" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box4com;
