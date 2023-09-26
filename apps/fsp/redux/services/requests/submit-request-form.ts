import { baseApiSlice } from "../../api/base.api-slice";
import { RequestType } from "./get-request-form-to-fill.api-slice";

interface ISubmitRequestFormPayload {
  entity: string;
  requestType: RequestType;
  regulatorId: "EMTECH";
  jsonResult: Record<string, string>;
}

interface ISubmitRequestFormResponse {
  id: number;
  requestType: string;
  json: Record<string, string>;
  requestNumber: string;
  fspId: string;
  regulatorId: "EMTECH";
  entity: string;
  status: "pending" | "completed" | "failed";
  walletType: "funding" | "closure" | "wallet";
  timestamp: number;
}

export const submitRequestFormApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Submit request form
    submitRequestForm: builder.mutation<
      ISubmitRequestFormResponse,
      ISubmitRequestFormPayload
    >({
      query: (transferPayload) => ({
        url: `requests/submit`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: transferPayload,
      }),
    }),
  }),
});

export const { useSubmitRequestFormMutation } = submitRequestFormApiSlice;
