"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@emtech/ui";
import { joinClasses } from "@emtech/utils";
import FormManagementTab from "@/pattern/management/templates/form-management-tab";
import UserManagementTab from "@/pattern/management/templates/user-management-tab";
import TokenManagementTab from "@/pattern/management/templates/token-management-tab";

const managementTabs = ["User Management", "Token Management", "Form Management"];

const ManagementPage = () => {
  const [activeTab, setActiveTab] = useState<string>(managementTabs[2]);

  return (
    <div className='bg-white w-full min-h-screen overflow-x-auto py-[40px] px-[90px] desktop:px-[auto] rounded-[4px]'>
      {/* Management Tabs */}
      <Tabs
        value={activeTab}
        defaultValue={activeTab}
        onValueChange={(value: string) => setActiveTab(value)}
        activeTab={activeTab}
        pageTabs={managementTabs}
        setActiveTab={setActiveTab}
        className='!w-full !space-y-[48px]'
      >
        {/* Management Tab List */}
        <TabsList arialabel='wallets' className='w-full'>
          <div className='w-full grid grid-cols-3 gap-4'>
            {managementTabs.map((tabValue, idx) => (
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
        {/* Management Tab List */}

        {/* User Management Tab */}
        <TabsContent value={managementTabs[0]}>
          <UserManagementTab />
        </TabsContent>
        {/* User Management Tab End */}

        {/* Token Management Tab */}
        <TabsContent value={managementTabs[1]}>
          <TokenManagementTab />
        </TabsContent>
        {/* Token Management Tab End */}

        {/* Form Management Tab */}
        <TabsContent value={managementTabs[2]}>
          <FormManagementTab />
        </TabsContent>
        {/* Form Management Tab End */}
      </Tabs>
      {/* Requests Tabs End */}
    </div>
  );
};

export default ManagementPage;
