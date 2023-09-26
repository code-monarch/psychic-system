import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from "recharts";

interface DataProps {
  time: string;
  "Transaction Volume": number;
  "Tokens Redeemed": number;
  "Wallet Requests": number;
}
const TransactionVolumeChart = () => {
  const data: DataProps[] = [
    {
      time: "00:00",
      "Transaction Volume": 4000,
      "Tokens Redeemed": 2400,
      "Wallet Requests": 2400,
    },
    {
      time: "01:00",
      "Transaction Volume": 3000,
      "Tokens Redeemed": 1398,
      "Wallet Requests": 2210,
    },
    {
      time: "02:00",
      "Transaction Volume": 2000,
      "Tokens Redeemed": 9800,
      "Wallet Requests": 2290,
    },
    {
      time: "03:00",
      "Transaction Volume": 2780,
      "Tokens Redeemed": 3908,
      "Wallet Requests": 2000,
    },
    {
      time: "04:00",
      "Transaction Volume": 1890,
      "Tokens Redeemed": 4800,
      "Wallet Requests": 2181,
    },
    {
      time: "05:00",
      "Transaction Volume": 2390,
      "Tokens Redeemed": 3800,
      "Wallet Requests": 2500,
    },
    {
      time: "06:00",
      "Transaction Volume": 3490,
      "Tokens Redeemed": 4300,
      "Wallet Requests": 2100,
    },
  ];
  return (
    <div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={1200}
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
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Transaction Volume"
          stroke="#174cff" 
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="Transaction Volume" stroke="#82ca9d" /> */}
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default TransactionVolumeChart;
