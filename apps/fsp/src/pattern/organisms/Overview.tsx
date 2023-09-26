"use client";
import React, { useState } from "react";
import AllActivitiesChart from "../molecules/AllActivitiesChart";
import TransactionVolumeChart from "../molecules/TransactionVolumeChart";
import TokensRedeemedChart from "../molecules/TokensRedeemedChart";
import WalletRequestsChart from "../transactions/organism/wallet-requests-chart";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectScrollUp,
  SelectScrollDown,
  SelectIcon,
} from "@emtech/ui";

const Overview = () => {
  const [tab, setTab] = useState("all activities");

  return (
    <div className="bg-white">
      <div className="flex justify-between ">
        <div className="flex gap-4 items-center">
          <p className="font-semibold">Overview</p>
          <div className="text-sm">
            <Select value={tab} defaultValue="" onValueChange={setTab}>
              <SelectTrigger>
                <SelectValue value="Transactions" placeholder="Transactions" />
                <SelectIcon />
              </SelectTrigger>

              <SelectContent className="text-sm">
                <SelectScrollUp />
                <SelectViewport>
                  <SelectItem value="all activities">
                    <SelectItemText>All Activities</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                  <SelectItem value="transaction volume">
                    <SelectItemText>Transaction Volume</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                  <SelectItem value="tokens redeemed">
                    <SelectItemText>Tokens Redeemed</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                  <SelectItem value="wallet requests">
                    <SelectItemText>Wallet Requests</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                </SelectViewport>
                <SelectScrollDown />
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        {tab === "all activities" && (
          <div>
            <AllActivitiesChart />
          </div>
        )}
        {tab === "transaction volume" && (
          <div>
            <TransactionVolumeChart />
          </div>
        )}
        {tab === "tokens redeemed" && (
          <div>
            <TokensRedeemedChart />
          </div>
        )}
        {tab === "wallet requests" && (
          <div>
            <WalletRequestsChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
