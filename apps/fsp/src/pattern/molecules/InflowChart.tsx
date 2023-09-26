import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataProps {
  time: string;
  "Fund Amount": number;
}

const InflowChart = () => {
  const data: DataProps[] = [
    {
      time: "00:00",
      "Fund Amount": 4000  },
    {
      time: "01:00",
      "Fund Amount": 3000  },
    {
      time: "02:00",
      "Fund Amount": 2000  },
    {
      time: "03:00",
      "Fund Amount": 2780  },
    {
      time: "04:00",
      "Fund Amount": 1890  },
    {
      time: "05:00",
      "Fund Amount": 2390  },
    {
      time: "06:00",
      "Fund Amount": 3490  },
    {
      time: "07:00",
      "Fund Amount": 4390  },
    {
      time: "08:00",
      "Fund Amount": 5690  },
    {
      time: "09:00",
      "Fund Amount": 2190  },
    {
      time: "10:00",
      "Fund Amount": 6390  },
    {
      time: "11:00",
      "Fund Amount": 1090  },
  ];
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={40}
          barGap={0}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            opacity={0.5}
            stroke="#f0f0f0"
          />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            wrapperStyle={{ marginTop: 200 }}
          />
          <Bar dataKey="Fund Amount" fill="#174cff" name="Balance" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InflowChart;
