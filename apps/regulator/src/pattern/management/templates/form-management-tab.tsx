import React, { useState } from "react";

// Tab Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@emtech/ui";

// Tab Trigger
import FormManagementTabsTrigger from "../atoms/form-management-tabs-trigger";

// Icons
import {
  FundingRedemptionRequestTabIcon,
  FundingRequestTabIcon,
  InstitutionalRequestTabIcon,
  WalletClosureRequestTabIcon,
} from "@emtech/icons";

// Create Request Form Widgets
import CreateInstitutionalWalletRequestFormWidget from "../organisms/create-institutional-wallet-request-request-widget";
import CreateFundingRequestFormWidget from "../organisms/create-funding-request-form-widget";
import CreateFunRedemptionFormWidget from "../organisms/create-fund-redemption-form-widget";
import CreateWalletClosureFormWidget from "../organisms/create-wallet-closure-form-widget";

const FormManagementTab = () => {
  const [activeTab, setActiveTab] = useState<string>(
    "Institutional Wallet Request"
  );

  // TABS
  const formManagementTabs = [
    {
      tab: "Institutional Wallet Request",
      icon: (
        <InstitutionalRequestTabIcon
          color={
            activeTab === "Institutional Wallet Request" ? "#174CFF" : "#000"
          }
        />
      ),
    },
    {
      tab: "Funding Request",
      icon: (
        <FundingRequestTabIcon
          color={activeTab === "Funding Request" ? "#174CFF" : "#000"}
        />
      ),
    },
    {
      tab: "Fund Redemption Request",
      icon: (
        <FundingRedemptionRequestTabIcon
          color={activeTab == "Fund Redemption Request" ? "#174CFF" : "#000"}
        />
      ),
    },
    {
      tab: "Wallet Closure",
      icon: (
        <WalletClosureRequestTabIcon
          color={activeTab === "Wallet Closure" ? "#174CFF" : "#000"}
        />
      ),
    },
  ];

  return (
    <div className='bg-inherit w-full min-h-screen overflow-x-auto '>
      {/* Form Management Tabs */}
      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        onValueChange={(value: string) => setActiveTab(value)}
        activeTab={activeTab}
        pageTabs={formManagementTabs}
        setActiveTab={setActiveTab}
        className='!w-full !h-full !space-y-[48px]'
      >
        {/* Form Management Tab List */}
        <TabsList arialabel='wallets' className='w-full'>
          <div className='w-full flex items-center'>
            {formManagementTabs.map((tab, idx) => (
              <TabsTrigger value={tab.tab} key={idx}>
                <FormManagementTabsTrigger
                  key={idx}
                  tabValue={tab.tab}
                  activeTab={activeTab}
                >
                  <span className='mr-2'>{tab.icon}</span>
                  {tab.tab}
                </FormManagementTabsTrigger>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {/* Form Management Tab List */}

        {/* Institutional Wallet Request Tab */}
        <TabsContent value={formManagementTabs[0].tab}>
          <CreateInstitutionalWalletRequestFormWidget />
        </TabsContent>
        {/* Institutional Wallet Request Tab End */}

        {/* Funding Tab */}
        <TabsContent value={formManagementTabs[1].tab}>
          <CreateFundingRequestFormWidget />
        </TabsContent>
        {/* Funding Tab End */}

        {/* Fund Redemption Tab */}
        <TabsContent value={formManagementTabs[2].tab}>
          <CreateFunRedemptionFormWidget />
        </TabsContent>
        {/* Fund Redemption Tab End */}

        {/* Fund Closure Tab */}
        <TabsContent value={formManagementTabs[3].tab}>
          <CreateWalletClosureFormWidget />
        </TabsContent>
        {/* Fund Closure Tab End */}
      </Tabs>
      {/* Requests Tabs End */}
    </div>
  );
};

export default FormManagementTab;
