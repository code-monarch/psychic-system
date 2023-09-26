"use client";
import React, { useRef, useState } from "react";
import {
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
  ScrollToEnd,
  ScrollToStart,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import FundingTab from "@/pattern/requests/templates/funding-tab";
import FundRedemptionTab from "@/pattern/requests/templates/fund-redemption-tab";
import InstitutionalRequestTab from "@/pattern/requests/templates/institutional-request-tab";
import WalletClosureRequestTab from "@/pattern/requests/templates/wallet-closure-request-tab";

export const requestsTabs = [
  "Institutional Wallet",
  "Funding",
  "Fund Redemption",
  "Wallet Closure",
];

const RequestsPage = () => {
  const [activeTab, setActiveTab] = useState<string>(requestsTabs[0]);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='bg-white w-full min-h-screen overflow-x-auto py-[40px] px-[90px] desktop:px-[auto] rounded-[4px]'>
      {/* Requests Tabs */}
      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        onValueChange={(value: string) => setActiveTab(value)}
        activeTab={activeTab}
        pageTabs={requestsTabs}
        setActiveTab={setActiveTab}
        className='!w-full !space-y-[48px]'
      >
        {/* Requests Tab List */}
        <div className='w-full h-[48px] flex items-start justify-evenly gap-x-[37px]'>
          {/* Scroll To Start Icon */}
          <ScrollToStart dir='horizontal' scrollAreaRef={scrollAreaRef} />
          {/* Scroll To Start Icon */}
          <ScrollArea className='!w-full flex items-center justify-between gap-x-[24px] pb-[10px]'>
            <ScrollAreaViewport className='w-full' innerRef={scrollAreaRef}>
              <TabsList
                arialabel='wallets'
                className='w-full flex items-center justify-between gap-x-[24px] pb-[10px]'
              >
                {requestsTabs.map((tabValue, idx) => (
                  <TabsTrigger value={tabValue} key={idx} className='flex-1'>
                    <div
                      key={tabValue}
                      className={joinClasses(
                        "bg-surfaceColor h-[54px] min-w-[361px] flex items-center justify-center focus:outline-none rounded-[4px]",
                        activeTab === tabValue
                          ? "text-primaryBlue font-[800] border border-primaryBlue"
                          : ""
                      )}
                    >
                      {tabValue}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation='horizontal' />
            <ScrollAreaScrollCorner />
          </ScrollArea>
          {/* Scroll To End Icon */}
          <ScrollToEnd dir='horizontal' scrollAreaRef={scrollAreaRef} />
          {/* Scroll To End Icon End */}
        </div>
        {/* Requests Tab List */}

        {/* Institutional Wallet Request Tab */}
        <TabsContent value={requestsTabs[0]}>
          <InstitutionalRequestTab />
        </TabsContent>
        {/* Institutional Wallet Request Tab End */}

        {/* Funding Tab */}
        <TabsContent value={requestsTabs[1]}>
          <FundingTab />
        </TabsContent>
        {/* Funding Tab End */}

        {/* Fund Redemption Tab */}
        <TabsContent value={requestsTabs[2]}>
          <FundRedemptionTab />
        </TabsContent>
        {/* Fund Redemption Tab End */}

        {/* Wallet Closu Tab */}
        <TabsContent value={requestsTabs[3]}>
          <WalletClosureRequestTab />
        </TabsContent>
        {/* Wallet Closu Tab End */}
      </Tabs>
      {/* Requests Tabs End */}
    </div>
  );
};

export default RequestsPage;
