import { LoginArgs, LoginResponse, RecoverArgs } from './auth.types.ts'

import { baseApi } from '@/services/base-api.ts'

const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `/v1/auth/me`,
          method: 'GET',
        })

        if (result.error) {
          // don't refetch on 404
          return { data: { success: false } }
        }
        console.log(result)

        return { data: result.data }
      },
      extraOptions: {
        maxRetries: 0,
      },
      providesTags: ['Me'],
    }),
    login: builder.mutation<LoginResponse, LoginArgs>({
      query: data => ({
        url: `/v1/auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Me'],
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        url: `/v1/auth/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Me'],
    }),
    signUp: builder.mutation<any, any>({
      query: params => {
        return {
          url: 'v1/auth/sign-up',
          method: 'POST',
          body: params,
        }
      },
    }),
    recoverPassword: builder.mutation<any, RecoverArgs>({
      query: params => {
        return {
          url: '/v1/auth/recover-password',
          method: 'POST',
          body: {
            ...params,
            html: '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>',
            subject: 'string',
          },
        }
      },
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
} = authService
