"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger, VisuallyHidden } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import MasterWalletTab from "./master-wallet-tab";
import DistributionWalletTab from "./distribution-wallet-tab";
import InstitutionalWalletTab from "./institutional-wallet-tab";
import MasterWalletTopSection from "@/pattern/organisms/master-wallet/master-wallet-top-section";
import DistributionWalletTopSection from "@/pattern/organisms/distribution-wallet/distribution-wallet-top-section";

const tabs = ["Master Wallet", "Distribution Wallet", "Institutional Wallet"];

const SandBoxWalletTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className='bg-white w-full min-h-screen flex flex-col items-center gap-y-[55px] py-[24px] px-[32px] rounded-[4px]'>
      {/* Top section */}
      <div className='w-full flex items-center justify-between'>
        {/* Master Wallet Top Section */}
        <VisuallyHidden visible={activeTab === "Master Wallet" ? true : false}>
          <MasterWalletTopSection
            balance='₦1,023,900,000.00'
            id='0.0.4690590'
            walletType='master'
          />
        </VisuallyHidden>
        {/* Master Wallet Top Section End */}

        {/* Distribution Wallet Top Section */}
        <VisuallyHidden
          visible={activeTab === "Distribution Wallet" ? true : false}
        >
          <DistributionWalletTopSection
            balance='₦1,023,900,000.00'
            id='0.0.4690590'
            walletType='Distiribution'
          />
        </VisuallyHidden>
        {/* Distribution Wallet Top Section End */}
      </div>
      {/* Top section End */}

      {/* Wallet Tabs */}
      <Tabs
        value={activeTab}
        defaultValue='one'
        onValueChange={(value: string) => setActiveTab(value)}
        className='!w-[80%] !space-y-[48px]'
      >
        {/* Wallet Tab List */}
        <TabsList arialabel='wallets'>
          <div className='w-full grid grid-cols-3 gap-4'>
            {tabs.map((tabValue, idx) => (
              <TabsTrigger value={tabValue} key={idx}>
                <div
                  key={tabValue}
                  className={joinClasses(
                    "bg-surfaceColor h-[54px] flex items-center justify-center focus:outline-none rounded-[4px]",
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
        {/* Master Wallet */}
        <TabsContent value={tabs[0]}>
          <MasterWalletTab />
        </TabsContent>
        {/* Master Wallet End */}

        {/* Distribution Wallet */}
        <TabsContent value={tabs[1]}>
          <DistributionWalletTab />
        </TabsContent>
        {/* Distribution Wallet End */}

        {/* Institutional Wallet */}
        <TabsContent value={tabs[2]}>
          <InstitutionalWalletTab />
        </TabsContent>
        {/* Institutional Wallet End */}
        {/* Tab Contents End */}
      </Tabs>
      {/* Wallet Tabs End */}
    </div>
  );
};

export default SandBoxWalletTabs;
