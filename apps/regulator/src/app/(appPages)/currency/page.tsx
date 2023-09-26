"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import BurnTokenTab from "@/pattern/currency/templates/burn-token-tab";
import DistributeTokenTab from "@/pattern/currency/templates/distribute-token-tab";
import MintTokenTab from "@/pattern/currency/templates/mint-token-tab";
import PagePanel from "@/pattern/common/atoms/page-panel";

const tabs = ["Mint Token", "Distribute Token", "Burn Token"];

const CurrencyManagementPage = () => {
  // Determines which tab is visible
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <PagePanel>
      {/* Tokens Tabs */}
      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        pageTabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onValueChange={(value: string) => setActiveTab(value)}
        className='!w-full !space-y-[48px]'
      >
        {/* Tokens Tab List */}
        <TabsList arialabel='wallets' className='w-full'>
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
        {/* Tokens Tab List */}

        {/* Mint Token Tab */}
        <TabsContent value={tabs[0]} className='!w-full !h-full'>
          <MintTokenTab />
        </TabsContent>
        {/* Mint Token Tab End */}

        {/* Distribute Token Tab */}
        <TabsContent value={tabs[1]}>
          <DistributeTokenTab />
        </TabsContent>
        {/* Distribute Token Tab End */}

        {/* Burn Token Tab */}
        <TabsContent value={tabs[2]}>
          <BurnTokenTab />
        </TabsContent>
        {/* Burn Token Tab End */}
      </Tabs>
      {/* Tokens Tabs End */}
    </PagePanel>
  );
};

export default CurrencyManagementPage;
