import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './Dialog.module.scss'

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
          <Dialog.Title className={s.DialogTitle}>Edit profile</Dialog.Title>
          <Dialog.Description className={s.DialogDescription}>
            Make changes to your profile here. Click save when you&#39;re done.
          </Dialog.Description>
          <fieldset className={s.Fieldset}>
            <label className={s.Label} htmlFor="name">
              Name
            </label>
            <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className={s.Fieldset}>
            <label className={s.Label} htmlFor="username">
              Username
            </label>
            <input className={s.Input} id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className={clsx(s.Button, s.ButtonGreen)}>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={s.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogDemo
