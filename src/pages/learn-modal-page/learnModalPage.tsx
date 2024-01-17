import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import s from './learnModalPage.module.scss'

import { Loader } from '@/components/ui/Loader/Loader.tsx'
import { LearnModal } from '@/components/ui/modal/LearnModal.tsx'
import {
  useGetCardQuery,
  useGetDeckByIdQuery,
  usePostCardMutation,
} from '@/services/decks/decks.service.ts'

export const LearnModalPage = () => {
  const params = useParams<'deckId'>()
  const navigate = useNavigate()

  const [sendGrade, { isLoading: isPostCardLoading, data }] = usePostCardMutation()
  const { data: deckData } = useGetDeckByIdQuery({ id: params?.deckId ?? '' })

  const title = deckData?.name ?? ''
  const deckId1 = params.deckId

  const {
    data: dataGet,
    isLoading,
    isFetching,
    error,
    isError,
  } = useGetCardQuery({
    deckId: deckId1 || (params.deckId ? params.deckId : ''),
  })

  if (isLoading || isFetching || isPostCardLoading) {
    return <Loader />
  }
  console.log(error)

  if (isError && error) {
    // return <ErrorPage errorMessage={error?.data?.message} />
    const notify = () => {
      toast.error(error ?? error?.data?.message, { theme: 'colored', autoClose: 2000 })
    }

    notify()

    return (
      <>
        <ToastContainer position={'top-center'} />
        <Navigate to={'/'} />
      </>
    )
  }

  const cardData = data || dataGet

  return (
    <div className={s.wrapper}>
      {cardData && (
        <LearnModal
          id={cardData.id}
          title={title ? title : 'Title'}
          question={cardData.question}
          answer={cardData.answer}
          shots={cardData.shots}
          navigate={navigate}
          onChange={sendGrade}
          imgAnswer={cardData.answerImg}
          imgQuestion={cardData.questionImg}
        />
      )}
    </div>
  )
}
