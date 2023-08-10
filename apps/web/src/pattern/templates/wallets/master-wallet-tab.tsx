"use client";
import React from "react";
import MasterWalletBarChart from "@/pattern/templates/charts/master-wallet-chart";
import TotalTokensIssuedCard from "../../organisms/total-tokens-issued-card";
import TotalTokensBurnedCard from "../../organisms/total-tokens-burned-card";
import Credits from "../../organisms/wallets/credits";
import Debits from "../../organisms/wallets/debits";
import TokensTotalSummary from "../../organisms/wallets/tokens-total-summary";

const MasterWalletTab = () => {
  return (
    <div>
      <MasterWalletBarChart
        series={[
          {
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          },
          {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
          },
        ]}
        xAxis={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]}
        options={{
          chart: {
            height: 350,
            type: "line",
            stacked: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [1, 1, 4],
          },
          title: {
            text: "XYZ - Stock Analysis (2009 - 2016)",
            align: "left",
            offsetX: 110,
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#008FFB",
              },
              labels: {
                style: {
                  colors: "#008FFB",
                },
              },
              title: {
                text: "Income (thousand crores)",
                style: {
                  color: "#008FFB",
                },
              },
              tooltip: {
                enabled: true,
              },
            },
            {
              seriesName: "Income",
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#00E396",
              },
              labels: {
                style: {
                  colors: "#00E396",
                },
              },
              title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                  color: "#00E396",
                },
              },
            },
            {
              seriesName: "Revenue",
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#FEB019",
              },
              labels: {
                style: {
                  colors: "#FEB019",
                },
              },
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: "#FEB019",
                },
              },
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60,
            },
          },
          legend: {
            horizontalAlign: "left",
            offsetX: 40,
          },
        }}
      />
      {/* Bottom */}
      <div className='w-full grid grid-cols-4 smLaptops:grid-cols-4 desktop:grid-cols-5 grid-rows-2 desktop:grid-rows-1 gap-y-[40px] gap-x-[25px] mt-[72px]'>
        <div className='col-span-2 '>
          <TokensTotalSummary />
        </div>
        <div className='col-span-1'>
          <TotalTokensIssuedCard />
        </div>
        <div className='col-span-1'>
          <TotalTokensBurnedCard />
        </div>
        <div className='col-span-1 space-y-[32px]'>
          <Credits />
          <Debits />
        </div>
      </div>
      {/* Bottom End */}
    </div>
  );
};

export default MasterWalletTab;
