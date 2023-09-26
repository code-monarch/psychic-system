"use client";
import React from "react";
import CreateRequestApprovalForm from "@/pattern/management/templates/create-request-approval-form";
import {
  ScrollArea,
  ScrollAreaScrollCorner,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from "@emtech/ui";

const CreateRequestFormPage = () => {
  return (
    <ScrollArea className='!min-w-full w-full !h-fit flex items-center justify-center'>
      <ScrollAreaViewport className='w-full'>
        <div className="w-full">
          <CreateRequestApprovalForm />
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='horizontal' />
      <ScrollAreaScrollCorner />
    </ScrollArea>
  );
};

export default CreateRequestFormPage;
