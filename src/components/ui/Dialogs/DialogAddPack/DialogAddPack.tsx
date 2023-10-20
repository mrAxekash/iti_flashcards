import { Dispatch, SetStateAction, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Checkbox } from '@/components/ui/Checkbox'
import sC from '@/components/ui/Dialogs/DialogsCommon.module.scss'
import { DialogsCommon } from '@/components/ui/Dialogs/DialogsCommon.tsx'
import { Textfield } from '@/components/ui/Textfield'
import { useAppDispatch } from '@/hooks.ts'
import { useCreateDeckMutation } from '@/services/decks/decks.service.ts'
import { updateCurrentPage } from '@/services/decks/decks.slice.ts'

export const DialogAddPack = (props: PropsType) => {
  const schema = z.object({
    packName: z.string().min(3),
  })

  type FormValues = z.input<typeof schema>

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      packName: '',
    },
  })

  const formRef = useRef<HTMLFormElement | null>(null)
  // this is temporary here
  const [newPackName, setNewPackName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)

  const dispatch = useAppDispatch()
  const [createDeck] = useCreateDeckMutation()

  //in progress ....
  /*const handleFormSubmitted = handleSubmit(values => {
    onAddNewCard(values.question, values.answer)
    reset()
    props.setOpen(false)
  })

  // on submit form emulation
  const onSubmitEmulation = () => {
    if (!formRef.current) return
    formRef.current.submit = handleFormSubmitted
    formRef.current.submit()
  }*/

  const onAddDeck = () => {
    if (!newPackName) return
    dispatch(updateCurrentPage(1))
    createDeck({ name: newPackName, isPrivate })
    props.setOpen(false)
  }

  const onClose = () => {
    props.setOpen(false)
  }

  return (
    <DialogsCommon
      title={'Add New Pack'}
      open={props.open}
      setOpen={onClose}
      onButtonAction={onAddDeck}
      actionButtonText={'Add New Pack'}
    >
      <form ref={formRef}>
        <div className={sC.DialogDescription}>
          <div className={sC.textFieldContainer}>
            <Textfield
              label={'Name Pack'}
              onChange={e => setNewPackName(e.currentTarget.value)}
              value={newPackName}
            />
          </div>
          <Checkbox label={'Private pack'} checked={isPrivate} onValueChange={setIsPrivate} />
        </div>
      </form>
    </DialogsCommon>
  )
}

type PropsType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

//todo: maybe reduce code duplication with DialogAddNewCard
