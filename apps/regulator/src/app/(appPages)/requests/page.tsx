"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import InstitutionalWalletRequestTab from "@/pattern/requests/templates/institutional-wallet-request-tab";
import FundingTab from "@/pattern/requests/templates/funding-tab";
import FundRedemptionTab from "@/pattern/requests/templates/fund-redemption-tab";

const requestTabs = ["Institutional Wallet", "Funding", "Fund Redemption"];

const RequestsPage = () => {
  const [activeTab, setActiveTab] = useState<string>(requestTabs[0]);

  return (
    <div className='bg-white w-full min-h-screen overflow-x-auto py-[40px] px-[90px] desktop:px-[auto] rounded-[4px]'>
      {/* Requests Tabs */}
      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        onValueChange={(value: string) => setActiveTab(value)}
        activeTab={activeTab}
        pageTabs={requestTabs}
        setActiveTab={setActiveTab}
        className='!w-full !space-y-[48px]'
      >
        {/* Requests Tab List */}
        <TabsList arialabel='wallets' className='w-full'>
          <div className='w-full grid grid-cols-3 gap-4'>
            {requestTabs.map((tabValue, idx) => (
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
        {/* Requests Tab List */}

        {/* Institutional Wallet Request Tab */}
        <TabsContent value={requestTabs[0]}>
          <InstitutionalWalletRequestTab />
        </TabsContent>
        {/* Institutional Wallet Request Tab End */}

        {/* Funding Tab */}
        <TabsContent value={requestTabs[1]}>
          <FundingTab />
        </TabsContent>
        {/* Funding Tab End */}

        {/* Fund Redemption Tab */}
        <TabsContent value={requestTabs[2]}>
          <FundRedemptionTab />
        </TabsContent>
        {/* Fund Redemption Tab End */}
      </Tabs>
      {/* Requests Tabs End */}
    </div>
  );
};

export default RequestsPage;
