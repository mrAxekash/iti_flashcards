import * as RDialog from '@radix-ui/react-dialog'

import { SelectedCardType } from '@/common/types.ts'
import s from '@/components/ui/Dialogs/DialogsCommon.module.scss'
import { DialogsCommon } from '@/components/ui/Dialogs/DialogsCommon.tsx'

export const DialogRemoveCard = (props: PropsType) => {
  const onDeleteCard = () => {
    window.alert(`delete card with id: ${props.selectedCard.id}`)
  }

  return (
    <DialogsCommon
      title={'Delete Pack'}
      open={props.open}
      setOpen={props.setOpen}
      onButtonAction={onDeleteCard}
      actionButtonText={'Delete pack'}
    >
      <RDialog.Description className={s.DialogDescription}>
        Do you really want to remove <b>{props.selectedCard.question}</b>?
        <br />
        All cards will be deleted.
      </RDialog.Description>
    </DialogsCommon>
  )
}

type PropsType = {
  open: boolean
  setOpen: (value: boolean) => void
  selectedCard: SelectedCardType
  setSelectedDeck: (value: SelectedCardType) => void
}
