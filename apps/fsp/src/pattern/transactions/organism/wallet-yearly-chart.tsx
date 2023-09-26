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
  month: string;
  "Transaction Volume": number;
}

const WalletYearlyChart = () => {
  const data: DataProps[] = [
    {
      month: "JAN",
      "Transaction Volume": 4000
    },
    {
      month: "FEB",
      "Transaction Volume": 3000
    },
    {
      month: "MAR",
      "Transaction Volume": 2000
    },
    {
      month: "APR",
      "Transaction Volume": 2780
    },
    {
      month: "MAY",
      "Transaction Volume": 1890
    },
    {
      month: "JUN",
      "Transaction Volume": 2390
    },
    {
      month: "JUL",
      "Transaction Volume": 3490
    },
    {
      month: "AUG",
      "Transaction Volume": 2308
    },
    {
      month: "SEP",
      "Transaction Volume": 9645
    },
    {
      month: "OCT",
      "Transaction Volume": 2453
    },
    {
      month: "NOV",
      "Transaction Volume": 1297
    },
    {
      month: "DEC",
      "Transaction Volume": 800
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
          <XAxis dataKey="month" />
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

export default WalletYearlyChart;
