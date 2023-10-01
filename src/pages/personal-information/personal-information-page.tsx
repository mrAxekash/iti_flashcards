import { PersonalInformation } from '@/components/personal-information'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service.ts'

export const PersonalInformationPage = () => {
  const [logout] = useLogoutMutation()
  const { data } = useGetMeQuery()

  console.log(data)
  console.log(logout)

  return <PersonalInformation avatar={data.avatar} userName={data.name} userEmail={data.email} />
}
