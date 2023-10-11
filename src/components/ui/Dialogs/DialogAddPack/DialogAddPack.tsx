import * as RDialog from '@radix-ui/react-dialog'

import closeIcon from '@/assets/icons/close.png'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import s from '@/components/ui/Dialogs/DialogsCommon.module.scss'
import { Textfield } from '@/components/ui/Textfield'

export const DialogAddPack = (props: PropsType) => {
  return (
    <RDialog.Root open={props.open} onOpenChange={props.setOpen}>
      <RDialog.Portal>
        <RDialog.Overlay className={s.DialogOverlay} />
        <RDialog.Content className={s.DialogContent}>
          <RDialog.Title className={s.DialogTitle}>
            <div>Add New Pack</div>
            <RDialog.Close asChild>
              <button className={s.IconButton} aria-label="Close">
                <img src={closeIcon} alt="closeIcon" />
              </button>
            </RDialog.Close>
          </RDialog.Title>
          <div className={s.DialogDescription}>
            <div className={s.textFieldContainer}>
              <Textfield
                label={'Name Pack'}
                onChange={e => props.onChangeNewPackName(e.currentTarget.value)}
                value={props.newPackName}
              />
            </div>
            <Checkbox
              label={'Private pack'}
              checked={props.isPrivate}
              onValueChange={props.setIsPrivate}
            />
          </div>
          <div className={s.buttonContainer}>
            <RDialog.Close asChild>
              <Button className={s.buttonCancel}>Cancel</Button>
            </RDialog.Close>
            <Button onClick={props.onAdd}>Add pack</Button>
          </div>
        </RDialog.Content>
      </RDialog.Portal>
    </RDialog.Root>
  )
}

type PropsType = {
  open: boolean
  setOpen: (open: boolean) => void
  newPackName: string
  onAdd: () => void
  onChangeNewPackName: (newPackName: string) => void
  isPrivate: boolean
  setIsPrivate: (isPrivate: boolean) => void
}
