"use client";
import { FC } from "react";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import {
  AlertDialogue,
  AlertDialogueContent,
  AlertDialogueOverlay,
  AlertDialoguePortal,
  AlertDialogueTrigger,
  Flex,
  IconButton,
  LinkButton,
  Vstack,
} from "@emtech/ui";
import {
  formatDate,
  formatTime,
  useCopyToClipboard,
  useToggle,
} from "@emtech/utils";
import {
  CopyIcon,
  PrinterIcon,
  RequestDetailsModalHeaderIcon,
} from "@emtech/icons";
import StatusIndicator from "@/pattern/common/atoms/table-status-indicator";
import { toastError, toastSuccess } from "@/pattern/common/atoms/toast";
import { useGetRequestDetailsQuery } from "@/redux/services/requests/get-request-details";
import Hidden from "@/pattern/common/atoms/hidden";
import Loading from "@/app/(appPages)/requests/loading";
import {
  useApproveRequestFormMutation,
  useDenyRequestFormMutation,
} from "@/redux/services/requests/approve-request-form.api-slice";

const styles = {
  label: `text-base text-primaryText font-sans font-[800]`,
  value: `justify-self-end text-base text-primaryText font-sans font-[500]`,
};

interface IProps {
  id: string;
  status: any;
}

const RequestDetailsModal: FC<IProps> = ({ id, status }) => {
  // Copy to clipboard hook
  const [value, copy] = useCopyToClipboard();

  const { data, isLoading } = useGetRequestDetailsQuery({
    id: id,
  });

  const [approveRequest, { isLoading: approvingRequest }] =
    useApproveRequestFormMutation();
  const [denyRequest, { isLoading: denyingRequest }] =
    useDenyRequestFormMutation();

  // Determines whether Modal is visible
  const [isOpen, setIsOpen] = useToggle(false);
  return (
    <AlertDialogue isopen={isOpen} setisopen={setIsOpen}>
      <AlertDialogueTrigger>
        <span>View Request Details</span>
      </AlertDialogueTrigger>

      {/* Alert Dialogue Portal */}
      <AlertDialoguePortal>
        <AlertDialogueOverlay
          className='!w-screen !min-h-screen !bg-[#1E252D]/30 !bg-blur-sm'
          isopen={isOpen}
        >
          <AlertDialogueContent>
            <ModalCard
              title={
                <div className='flex items-center gap-x-[16px]'>
                  <h3>Request Details</h3>
                  <PrinterIcon />
                </div>
              }
              closeModal={() => setIsOpen()}
            >
              <>
                <Hidden visible={!isLoading}>
                  <div className='space-y-[54px]'>
                    <div className='w-full flex flex-col items-center gap-y-[54px]'>
                      {/* Header */}
                      <div className='w-full flex flex-col items-center gap-y-[24px]'>
                        <RequestDetailsModalHeaderIcon />
                        {/* Request Number */}
                        <div className='text-center space-y-[8px]'>
                          <h4 className='text-primaryText text-sm font-sans font-[500]'>
                            Request Number (RN)
                          </h4>
                          <h2 className='text-primaryText text-2xl font-sans font-[800]'>
                            {data?.id ?? "---"}
                          </h2>
                        </div>
                        {/* Request Number End */}
                      </div>
                      {/* Header End */}
                      {/*  */}
                      <div className='bg-surfaceColor w-full rounded-lg'>
                        <Vstack gap='2xl' className='!p-4 !border-b border-'>
                          {/* Wallet Request Type */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>
                              Wallet Request Type:
                            </h2>
                            <h2 className={styles.value}>
                              {data?.requestType ?? "---"}
                            </h2>
                          </Flex>
                          {/* Wallet Request Type End */}

                          {/* Request ID */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>Request ID:</h2>
                            <div className='flex items-center gap-x-[8px]'>
                              <h2 className={styles.value}>
                                {data?.id ?? "---"}
                              </h2>
                              <div
                                onClick={() => {
                                  copy("Request ID");
                                  toastSuccess("Copied to clipboard");
                                }}
                                className='flex gap-2 justify-center items-center rounded-xl bg-primary-150 px-3 py-1.5 cursor-pointer'
                              >
                                <CopyIcon />
                              </div>
                            </div>
                          </Flex>
                          {/* Request ID End */}

                          {/* Request Status */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>Request Status:</h2>
                            <StatusIndicator status={data?.status ?? "---"} />
                          </Flex>
                          {/* Request Status End */}
                        </Vstack>
                        <Vstack gap='2xl' className='!p-4'>
                          {/* Request From */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>Wallet From:</h2>
                            <h2 className={styles.value}>
                              {data?.entity ?? "---"}
                            </h2>
                          </Flex>
                          {/* Request From End */}

                          {/* Request Date */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>Request Date:</h2>
                            <h2 className={styles.value}>
                              {formatDate(data?.timestamp ?? "---")}
                            </h2>
                          </Flex>
                          {/* Request Date End */}

                          {/* Request Time */}
                          <Flex className='w-full justify-between'>
                            <h2 className={styles.label}>Request Time:</h2>
                            <h2 className={styles.value}>
                              {formatTime(data?.timestamp)}
                            </h2>
                          </Flex>
                          {/* Request Time End */}
                        </Vstack>
                      </div>
                      {/*  */}
                    </div>
                    {/* Actions */}
                    <Hidden
                      visible={
                        status.toLowerCase() === "pending" ? true : false
                      }
                    >
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-x-[16px]'>
                          <IconButton
                            variant='primary'
                            size='xl'
                            className='!w-[127px] !h-[44px]'
                            loading={approvingRequest}
                            onClick={() => {
                              approveRequest({
                                id: Number(id),
                                status: "approved",
                              }).then(() => {
                                toastSuccess("Request approved");
                                setIsOpen();
                              });
                            }}
                          >
                            Approve
                          </IconButton>

                          {/* Deny Request */}
                          <IconButton
                            variant='red_outline'
                            size='xl'
                            className='!w-[127px] !h-[44px]'
                            loading={denyingRequest}
                            onClick={() => {
                              denyRequest({
                                id: Number(id),
                                status: "denied",
                              }).then(() => {
                                toastError("Request denied");
                                setIsOpen();
                              });
                            }}
                          >
                            Deny
                          </IconButton>
                        </div>
                        {/* Controls End */}
                        {/* Add a Comment */}
                        <LinkButton className='!font-[800] !text-primaryText !text-sm'>
                          Add a Comment
                        </LinkButton>
                        {/* Add a Comment End */}
                      </div>
                    </Hidden>
                    {/* Actions End */}
                  </div>
                </Hidden>
                <Hidden visible={isLoading}>
                  <Loading />
                </Hidden>
              </>
            </ModalCard>
          </AlertDialogueContent>
        </AlertDialogueOverlay>
      </AlertDialoguePortal>
      {/* Alert Dialogue Portal End */}
    </AlertDialogue>
  );
};

export default RequestDetailsModal;
