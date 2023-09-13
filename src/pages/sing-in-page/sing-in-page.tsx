import {SignIn} from "@/components/auth/signIn-form"
import {useGetMeQuery, useLoginMutation} from "@/services/auth/auth.service.ts"
import {Navigate} from "react-router-dom"

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const {data: me, isLoading: isMeLoading} = useGetMeQuery()

  if (isMeLoading) return <div>Loading...</div>
  if (me && me?.success !== false) return <Navigate to="/" />

  return <SignIn onSubmit={login}/>
}