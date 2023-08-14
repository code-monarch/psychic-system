import { baseApiSlice } from "../../api/base.api-slice";

interface IDashboardResponse {
  error: boolean;
  message: string;
  users: [
    {
      calls: number;
      userId: string;
      fullName: string;
    },
  ];
  monthlyStatistics: {
    month: string; // e.g "July 2022"
    totalCalls: number;
  }[];
  registeredUsers: number;
  subscribedUsers: number;
  apiCallCount: number;
  expiringUsers: number;
  totalRevenue: number;
  lastWeekRevenue: number;
  revenuePercentage: number | string;
  timestamp: string;
}

// Since we've already created a base apiSlice for our application with our base URl,
//  we will simply be injecting other apiSlices, loginApiSlice for example, into our apiSlice
export const dashboardApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin Dashboard
    getDashboardData: builder.query<IDashboardResponse, void>({
      query: () => ({
        url: "admin/dashboard",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // providesTags: ["dashboardData"], // A providesTags array in query endpoints, listing a set of tags describing the data in that query
      }),
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApiSlice;
