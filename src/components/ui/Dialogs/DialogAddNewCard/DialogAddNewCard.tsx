import { Dispatch, SetStateAction, useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import sC from '@/components/ui/Dialogs/DialogsCommon.module.scss'
import { DialogsCommon } from '@/components/ui/Dialogs/DialogsCommon.tsx'
import { Textfield } from '@/components/ui/Textfield'

export const DialogAddNewCard = (props: PropsType) => {
  const schema = z.object({
    answer: z.string(),
    question: z.string(),
  })

  type FormValues = z.input<typeof schema>

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      answer: '',
      question: '',
    },
  })

  // const onSubmitHandler: SubmitHandler<FormValues> = data => console.log(data)
  const handleFormSubmitted = handleSubmit(values => {
    console.log(values)
    alert('handleFormSubmitted DialogAddNewCard')

    return false
  })

  const formRef = useRef<HTMLFormElement | null>(null)

  return (
    <DialogsCommon
      title={'Add New Card'}
      open={props.open}
      setOpen={props.setOpen}
      onButtonAction={() => {
        if (!formRef.current) return
        formRef.current.submit = handleFormSubmitted
        formRef.current.submit()
      }}
      actionButtonText={'Add New Card'}
    >
      <form ref={formRef}>
        {/*<Button*/}
        {/*  onClick={() => {*/}
        {/*    alert('self button alert')*/}
        {/*  }}*/}
        {/*  type={'submit'}*/}
        {/*>*/}
        {/*  test submit*/}
        {/*</Button>*/}
        <div className={sC.DialogDescription}>
          <div className={sC.textFieldContainer}>
            <Textfield
              label={'Question'}
              onChange={e => props.onChangeQuestion(e.currentTarget.value)}
              value={props.question}
            />
          </div>
          <div className={sC.textFieldContainer}>
            <Textfield
              label={'Answer'}
              onChange={e => props.onChangeAnswer(e.currentTarget.value)}
              value={props.answer}
            />
          </div>
        </div>
      </form>
    </DialogsCommon>
  )
}

type PropsType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  question: string
  answer: string
  onChangeQuestion: (value: string) => void
  onChangeAnswer: (value: string) => void
  onAddNewCard: () => void
}
