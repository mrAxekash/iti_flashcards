import { PersonalInformation } from '@/components/personal-information'
import {
  useGetMeQuery,
  useLogoutMutation,
  usePatchMeMutation,
  //usePatchMeMutation,
} from '@/services/auth/auth.service.ts'

export const PersonalInformationPage = () => {
  const [logout] = useLogoutMutation()
  const { data } = useGetMeQuery()
  const [updateData] = usePatchMeMutation()

  const onChangeUserName = (newName: string) => {
    updateData({
      name: newName,
      //email: data.email,
    })
  }

  return (
    <PersonalInformation
      avatar={data.avatar}
      userName={data.name}
      userEmail={data.email}
      onLogout={logout}
      onChangeUserName={onChangeUserName}
    />
  )
}
