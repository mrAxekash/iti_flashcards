import { Dispatch, SetStateAction } from 'react'

import { DialogsCommon } from '@/components/ui/Dialogs/DialogsCommon.tsx'

export const DialogAddNewCard = (props: PropsType) => {
  return (
    <DialogsCommon
      title={'Add New Card'}
      open={props.open}
      setOpen={props.setOpen}
      onButtonAction={props.onAddNewCard}
      actionButtonText={'Add New Card'}
    >
      DialogAddNewCard
    </DialogsCommon>
  )
}

type PropsType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  newCardName: string
  onChangeNewPackName: (newPackName: string) => void
  onAddNewCard: () => void
}
