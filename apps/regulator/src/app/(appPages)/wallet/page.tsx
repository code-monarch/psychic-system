"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import MasterWalletTopSection from "@/pattern/wallets/organisms/master-wallet-top-section";
import DistributionWalletTopSection from "@/pattern/wallets/organisms/distribution-wallet-top-section";
import MasterWalletTab from "@/pattern/wallets/templates/master-wallet-tab";
import DistributionWalletTab from "@/pattern/wallets/templates/distribution-wallet-tab";
import InstitutionalWalletTab from "@/pattern/wallets/templates/institutional-wallet-tab";
import PagePanel from "@/pattern/common/atoms/page-panel";
import { useGetWalletsSummaryQuery } from "@/redux/services/wallet/get-wallet-summary.api-slice";
import InstitutionalWalletTopSection from "@/pattern/wallets/organisms/institutional-wallet-top-section";
import Hidden from "@/pattern/common/atoms/hidden";

const walletTabs = [
  "master wallet",
  "distribution wallet",
  "institutional wallet",
];

const WalletPage = () => {
  // Sets Active Wallet Tab
  const [activeTab, setActiveTab] = useState<string>(walletTabs[0]);

  // API query that for wallet summary
  const { data: walletSummary } = useGetWalletsSummaryQuery();

  return (
    <PagePanel>
      {/* Top section */}
      <div className='w-full flex items-center justify-between'>
        {/* Master wallet top section */}
        <Hidden visible={activeTab === walletTabs[0] ? true : false}>
          <MasterWalletTopSection
            balance={walletSummary?.masterWalletBalance}
            id={`${walletSummary?.masterWalletId ?? ""}`}
            walletType='master'
          />
        </Hidden>

        {/* Distribution Wallet top section */}
        <Hidden visible={activeTab === walletTabs[1] ? true : false}>
          <DistributionWalletTopSection
            balance={walletSummary?.distributionWalletBalance}
            id={`${walletSummary?.distributionWalletId ?? ""}`}
            walletType='Distiribution'
          />
        </Hidden>

        {/* Institutional Wallet top section */}
        <Hidden visible={activeTab === walletTabs[2] ? true : false}>
          <InstitutionalWalletTopSection
            balance={walletSummary?.institutionalWalletBalance}
          />
        </Hidden>
      </div>
      {/* Top section End */}

      {/* Wallet Tabs */}
      <Tabs
        value={activeTab}
        defaultValue='one'
        onValueChange={(value: string) => setActiveTab(value)}
        activeTab={activeTab}
        pageTabs={walletTabs}
        setActiveTab={setActiveTab}
        className='w-[90%] !space-y-[48px]'
      >
        {/* Wallet Tab List */}
        <TabsList arialabel='wallets'>
          <div className='w-full grid grid-cols-3 gap-4'>
            {walletTabs.map((tabValue) => (
              <TabsTrigger value={tabValue} key={tabValue}>
                <div
                  className={joinClasses(
                    "bg-surfaceColor h-[54px] capitalize flex items-center justify-center focus:outline-none rounded-[4px]",
                    activeTab === tabValue
                      ? "text-primaryBlue font-[800] border border-primaryBlue"
                      : ""
                  )}
                >
                  {tabValue}
                </div>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {/* Wallets Tab List */}

        {/* Tab Contents */}
        <TabsContent value={walletTabs[0]}>
          <MasterWalletTab />
        </TabsContent>

        <TabsContent value={walletTabs[1]}>
          <DistributionWalletTab />
        </TabsContent>

        <TabsContent value={walletTabs[2]}>
          <InstitutionalWalletTab />
        </TabsContent>
        {/* Tab Contents End */}
      </Tabs>
    </PagePanel>
  );
};

export default WalletPage;
