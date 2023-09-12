import {baseApi} from "@/services/base-api.ts"
import {LoginArgs, LoginResponse} from "./auth.types.ts"

const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      query: () => `/v1/auth/me`,
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: ({email, password}) => ({
        url: `/v1/auth/login`,
        method: 'POST',
        body: {
          email,
          password
        },
      }),
    })
  }),
})

export const { useGetMeQuery, useLoginMutation } = authService