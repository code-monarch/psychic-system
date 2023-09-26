"use client";
import React, { FC, useEffect } from "react";

// Survey Js
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";

// Styles
import "survey-core/defaultV2.min.css";
import "@/styles/survey.css";

// API Hooks
import { useSubmitRequestFormMutation } from "@/redux/services/requests/submit-request-form";
import {
  RequestType,
  useGetRequestFormToFillQuery,
} from "@/redux/services/requests/get-request-form-to-fill.api-slice";

// Packages
import { toastLoading } from "@emtech/ui";

import Hidden from "@/pattern/common/atoms/hidden";
import Loading from "@/app/(fspPages)/requests/loading";
import { toastError, toastSuccess } from "@/pattern/common/atoms/toast";

interface IProps {
  requestType: RequestType;
}

const RenderRequestForm: FC<IProps> = ({ requestType }) => {
  const [submitRequestForm, { isLoading: isSubmitting }] =
    useSubmitRequestFormMutation();

  const { data, isLoading } = useGetRequestFormToFillQuery({
    requestType: requestType,
  });

  useEffect(() => {
    if (isSubmitting) {
      toastLoading("Submitting Request Form");
    } else {
      return;
    }
  }, [isSubmitting]);

  // Instantiate an instance of survey Js with a model JSON
  const survey = new Model(data?.json);

  survey.onComplete.add((sender, options) => {
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress("Submitting Request Form");
    submitRequestForm({
      jsonResult: sender?.data,
      entity: "paystack",
      regulatorId: "EMTECH",
      requestType: data?.requestType,
    })
      .then(() => toastSuccess("Request Form Submitted"))
      .catch(() => toastError("Failed to Submit Request Form"));

    // Display the "Error" message (pass a string value to display a custom message)
    options.showSaveError("Error Submitting Request Form");
  });

  return (
    <>
      <Hidden visible={!isLoading ? true : false}>
        <Survey model={survey} />
      </Hidden>
      <Hidden visible={isLoading}>
        <Loading />
      </Hidden>
    </>
  );
};

export default RenderRequestForm;
