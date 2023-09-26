"use client";
import React from "react";
import {
  PlusIconButton,
  VisuallyHidden,
} from "@emtech/ui";
import { useRouter } from "next/navigation";
import { WalletRequestIcon } from "@emtech/icons";
import {
  RequestType,
  useCreateInitialRequestFormMutation,
} from "@/redux/services/requests/create-initial-request-form";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import Loading from "@/app/(appPages)/management/loading";
import { toastError } from "@/pattern/common/atoms/toast";
import { useGetManagementTableQuery } from "@/redux/services/requests/get-management-table.api-slice";

const CreateWalletClosureFormWidget = () => {
  const { push } = useRouter();
  const {
    data: requestTable,
    isLoading,
    isError,
    isSuccess,
  } = useGetManagementTableQuery({ requestType: RequestType.funding });

  const [createInitialRequest, { isLoading: initiatingRequest }] =
    useCreateInitialRequestFormMutation();

  const handleCreateInitialRequest = () => {
    createInitialRequest({
      requestType: RequestType.closure,
      name: "REG_19000909022",
      walletType: "reserve",
    })
      .unwrap()
      .then((res) => {
        // Save respose to local storage
        LocalStore.setItem({
          key: "survey-json",
          value: JSON.stringify(res?.json),
        });

        //  Go to Create-request-form page
        push("management/create-request-form");
      })
      .catch(() => {
        toastError("Duplicate Form Request");
      });
  };

 const handleShowRequestForm = () => {
   LocalStore.setItem({
     key: "survey-json",
     value: JSON.stringify(requestTable?.json),
   });
   LocalStore.setItem({
     key: "request-id",
     value: String(requestTable.id),
   });

   //  Go to Create-request-form page
   push("management/create-request-form");
 };
  return (
    <div className='w-full flex flex-col items-center space-y-[16px]'>
      {/* Placeholder */}
      <VisuallyHidden visible={!isLoading}>
        <div className='w-[413px] flex flex-col items-center gap-y-[52px]'>
          <div className='w-full flex flex-col items-center gap-y-[16px]'>
            {/* Icon */}
            <span>
              <WalletRequestIcon />
            </span>
            {/* Icon End */}

            {/* Deescription */}
            <p className='w-full font-sans font-[500] text-[16px] text-center text-primaryText leading-normal'>
              Create a wallet closure form
            </p>
            {/* Deescription End */}
          </div>

          {/* Action */}
          <PlusIconButton
            className='capitalize'
            size='sm'
            onClick={() => handleCreateInitialRequest()}
            loading={initiatingRequest}
          >
            Create a wallet closure form
          </PlusIconButton>
          {/* Action End */}

          {/* Show Request Form */}
          <PlusIconButton
            className='capitalize'
            size='sm'
            onClick={() => handleShowRequestForm()}
          >
            Show Funding Request Form
          </PlusIconButton>
          {/* Show Request Form End */}
        </div>
      </VisuallyHidden>

      {/* Show Loading Icon when isLoading */}
      <VisuallyHidden visible={isLoading && !isError && !isSuccess}>
        <Loading />
      </VisuallyHidden>
    </div>
  );
};

export default CreateWalletClosureFormWidget;
