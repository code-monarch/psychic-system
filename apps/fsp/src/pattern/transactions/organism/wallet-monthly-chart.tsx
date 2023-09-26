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
  week: string;
  "Monday": number;
  "Tuesday": number;
  "Wednesday": number;
  "Thursday": number;
  "Friday": number;
  "Saturday": number;
  "Sunday": number;
}

const WalletMonthlyChart = () => {
  const data: DataProps[] = [
    {
      week: "Week 1",
      "Monday": 4000,
      "Tuesday": 2400,
      "Wednesday": 2400,
      "Thursday": 1300,
      "Friday": 4500,
      "Saturday": 3840,
      "Sunday": 800
    },
    {
      week: "Week 2",
      "Monday": 3000,
      "Tuesday": 1398,
      "Wednesday": 2210,
      "Thursday": 1300,
      "Friday": 4500,
      "Saturday": 3840,
      "Sunday": 800
    },
    {
      week: "Week 3",
      "Monday": 2000,
      "Tuesday": 9800,
      "Wednesday": 2290,
      "Thursday": 1300,
      "Friday": 4500,
      "Saturday": 3840,
      "Sunday": 800
    },
    {
      week: "Week 4",
      "Monday": 2780,
      "Tuesday": 3908,
      "Wednesday": 2000,
      "Thursday": 1300,
      "Friday": 4500,
      "Saturday": 3840,
      "Sunday": 800
    }
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
          barSize={20}
          barGap={8}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            opacity={0.5}
            stroke="#f0f0f0"
          />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            wrapperStyle={{ marginTop: 200 }}
            color="#174cff"
            fill="#174cff"
          />
          <Bar dataKey="Monday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Tuesday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Wednesday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Thursday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Friday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Saturday" fill="#174cff33" name="Balance" />
          <Bar dataKey="Sunday" fill="#174cff33" name="Balance" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletMonthlyChart;
