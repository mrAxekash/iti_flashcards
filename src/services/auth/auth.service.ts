import {baseApi} from "@/services/base-api.ts"

const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query({
      query: () => `/v1/auth/me`,
    })
  }),
})

export const { useGetMeQuery } = authService