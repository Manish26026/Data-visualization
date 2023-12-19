import "./box5com.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


import { useData } from "../../DataStore";

function Box5com() {
  const sampledData11 = useData();

  const sampleSize = 19;
  const step = Math.floor(sampledData11.length / sampleSize);

  const sampledData112 = sampledData11.filter((_, index) => index % step === 0);

  return (
    <div className="box5com">
      <div className="heading">
        <div>
          <h2>Trend</h2>
          <span>Intensity vs Likelihood Over Time</span>
        </div>

        <div className="box5chart">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={sampledData112}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="likelihood" />
                <YAxis dataKey="intensity"/>
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="intensity"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box5com;
