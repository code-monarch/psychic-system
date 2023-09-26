"use client";
import React, { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import RecentTransactionsModal from "@/pattern/transactions/organisms/modals/recent-transactions";

const Chart = dynamic(() => import("react-apexcharts"));

const MasterWalletBarChart = ({
  series,
  xAxis,
  yAxis,
  loading,
  colors = ["#0067FC", "#5ccaba"],
}: {
  series?: any;
  options: any;
  xAxis?: string[];
  yAxis?: any;
  colors?: string[];
  loading?: boolean;
}) => {
  const initialOption: ApexOptions = {
    colors: colors,
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    grid: {
      strokeDashArray: 5,
    },
    plotOptions: {
      bar: {
        // vertical: true,
        borderRadius: 4,
        // columnWidth: "30",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {},
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    noData: {
      text: "No Data",
      style: {
        color: "#000000",
        fontSize: "17px",
        fontFamily: "inherit",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    series: [],
  };

  const [chartOption, setchartOption] = useState(initialOption);

  // update chart options
  useEffect(() => {
    if (series) {
      setchartOption((prev) => ({
        ...prev,
        xaxis: {
          ...prev?.xaxis,
          categories: xAxis,
        },
        yaxis: {
          ...prev?.yaxis,
          categories: yAxis,
        },
        noData: {
          ...prev?.noData,
          text: loading ? "Loading..." : "No Data",
        },
        series,
      }));
    }
  }, [series, loading, xAxis, yAxis]);

  return (
    <div className='relative w-full pb-[50px] mt-[72px] border-b-[1px] border-[#174CFF] border-opacity-20'>
      {typeof window !== "undefined" && (
        <Chart
          options={chartOption}
          series={series}
          type='bar'
          width={"100%"}
          height={325}
        />
      )}
      {/* See All Transactions Button */}
      <div className='absolute bottom-[-25px] left-0 bg-white pl-3 pr-10'>
        <RecentTransactionsModal />
      </div>
      {/* See All Transactions Button End */}
    </div>
  );
};

export default MasterWalletBarChart;
