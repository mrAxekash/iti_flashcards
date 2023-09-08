import {baseApi} from "@/services/base-api.ts"

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<any, {email: string, password: string}>({
      query: params => {
        return {
          url: 'v1/auth/login',
          method: 'POST',
          body: params
        }
      },
    }),
    signUp: builder.mutation<any, any>({
      query: params => {
        return {
          url: 'v1/auth/sign-up',
          method: 'POST',
          body: params
        }
      },
    }),
  })
})

export const { useLoginMutation, useSignUpMutation } = authApi