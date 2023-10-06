import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './Dialog.module.scss'

import closeIcon from '@/assets/icons/close.png'
import { Button } from '@/components/ui/Button'

const DialogDemo = () => {
  const [open, setOpen] = useState(true)

  console.log('open', open)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={clsx(s.Button, s.ButtonViolet)}>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <Dialog.Title className={s.DialogTitle}>
            <div>Delete Pack</div>
            <Dialog.Close asChild>
              <button className={s.IconButton} aria-label="Close">
                <img src={closeIcon} alt="closeIcon" />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className={s.DialogDescription}>
            Do you really want to remove Pack Name?
            <br />
            All cards will be deleted.
          </Dialog.Description>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <Button className={clsx(s.Button, s.ButtonGreen)}>Cancel</Button>
            </Dialog.Close>
            <Button className={clsx(s.Button, s.ButtonGreen)}>Delete pack</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogDemo
