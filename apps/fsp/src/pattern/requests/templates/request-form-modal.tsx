"use client";
import React, { FC } from "react";
import { Portal } from "@emtech/ui";
import ModalCard from "@/pattern/common/organisms/cards/modal-card";
import RenderRequestForm from "../organisms/render-request-form";
import {
  RequestType,
} from "@/redux/services/requests/get-request-form-to-fill.api-slice";

interface IProps {
  isOpen: boolean;
  closeModal: any;
}

const RequestFormRenderModal: FC<IProps> = ({
  isOpen,
  closeModal,
}) => {
  
  return (
    <Portal
      isOpen={isOpen}
      onOpenChange={closeModal}
      className='!flex !items-center !justify-center !pt-12'
    >
      <ModalCard title='' description='' closeModal={() => closeModal()}>
        <div className='w-full !h-[439px]'>
          <RenderRequestForm requestType={RequestType.wallet} />
        </div>
      </ModalCard>
    </Portal>
  );
};

export default RequestFormRenderModal;
