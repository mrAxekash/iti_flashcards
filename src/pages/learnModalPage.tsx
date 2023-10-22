import { FC, useState } from 'react'

import { Play } from '@/assets/icons/Play.tsx'
import { LearnModal } from '@/components/ui/modal/LearnModal.tsx'
import { useGetCardQuery, usePostCardMutation } from '@/services/decks/decks.service.ts'

type LearnModalPageType = {
  deckId: string
  deckName: string
}

export const LearnModalPage: FC<LearnModalPageType> = ({ deckId, deckName }) => {
  const [open, setOpen] = useState(false)
  const { data } = useGetCardQuery({ deckId })

  const [sendGrade, {}] = usePostCardMutation()

  // console.log(deckId)
  // console.log(deckName)
  // console.log(data)

  return (
    <div>
      {open && (
        <LearnModal
          //@ts-ignore
          id={data.id}
          title={deckName}
          question={data.question}
          answer={data.answer}
          shots={data.shots}
          open={open}
          setOpen={setOpen}
          onChange={sendGrade}
          imgAnswer={data.answerImg}
          imgQuestion={data.questionImg}
        ></LearnModal>
      )}

      {/*<img src="" alt="click me" onClick={() => setOpen(true)} />*/}
      <div onClick={() => setOpen(true)}>
        <Play color={'white'} />
      </div>
    </div>
  )
}

// есть кнопка. нажал на кнопку - открылось модальное окно с вопросом, картинкой и кнопкой. Нажал на кнопку "показать ответ" - открылась радиогруппа с оценками. после нажатия на оценку и нажатия "следующий вопрос", делается запрос, ответом которого будет новый вопрос по карточке.
