import { baseApiSlice } from "../../api/base.api-slice";

interface IUpdateUserServicePayload {
  userId: string;
  serviceId: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const updateUserServiceApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Adds service to a CaaS User
    updateUserService: builder.mutation<any, IUpdateUserServicePayload>({
      query: ({ serviceId, userId }) => ({
        url: `admin/update/user/${userId}/service/${serviceId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // patch CaaS User Service
    patchUserService: builder.mutation<any, IUpdateUserServicePayload>({
      query: ({ serviceId, userId }) => ({
        url: `admin/update/user/${userId}/service/${serviceId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // Deletes CaaS User Service
    deleteUserService: builder.mutation<any, IUpdateUserServicePayload>({
      query: ({ serviceId, userId }) => ({
        url: `admin/update/user/${userId}/service/${serviceId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useUpdateUserServiceMutation,
  usePatchUserServiceMutation,
  useDeleteUserServiceMutation,
} = updateUserServiceApiSlice;
