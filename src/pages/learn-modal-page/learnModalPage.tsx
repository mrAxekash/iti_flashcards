import { useNavigate, useParams } from 'react-router-dom'

import s from './learnModalPage.module.scss'

import { LearnModal } from '@/components/ui/modal/LearnModal.tsx'
import { useGetCardQuery, usePostCardMutation } from '@/services/decks/decks.service.ts'

export const LearnModalPage = () => {
  const params = useParams<'deckTitle' | 'deckId'>()
  const navigate = useNavigate()

  const [sendGrade, { isLoading: isPostCardLoading }] = usePostCardMutation()

  const { data, isLoading, isFetching } = useGetCardQuery({
    deckId: params.deckId ? params.deckId : '',
  })

  if (isLoading || isFetching || isPostCardLoading) {
    // setOpen(true)

    return <div>Loading...</div>
  }

  return (
    <div className={s.wrapper}>
      {data && (
        <LearnModal
          id={data.id}
          title={params.deckTitle ? params.deckTitle : 'Title'}
          question={data.question}
          answer={data.answer}
          shots={data.shots}
          navigate={navigate}
          onChange={sendGrade}
          imgAnswer={data.answerImg}
          imgQuestion={data.questionImg}
        />
      )}
    </div>
  )
}
