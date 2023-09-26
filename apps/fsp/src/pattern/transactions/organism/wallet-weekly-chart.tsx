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

interface DataProps {
  day: string;
  "Transaction Volume": number;
}

const WalletWeeklyChart = () => {
  const data: DataProps[] = [
    {
      day: "MON",
      "Transaction Volume": 4000
    },
    {
      day: "TUES",
      "Transaction Volume": 3000
    },
    {
      day: "WED",
      "Transaction Volume": 2000
    },
    {
      day: "THURS",
      "Transaction Volume": 2780
    },
    {
      day: "FRI",
      "Transaction Volume": 1890
    },
    {
      day: "SAT",
      "Transaction Volume": 2390
    },
    {
      day: "SUN",
      "Transaction Volume": 3490
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            opacity={0.5}
            stroke="#f0f0f0"
          />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Transaction Volume"
            stroke="#174cff"
            activeDot={{ r: 8 }}
            name="Balance"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletWeeklyChart;
