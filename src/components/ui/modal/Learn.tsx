import { FC, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import { RadioGroup } from '../RadioGroup/RadioGroup'

import s from './Learn.module.scss'

import { ArrowBack } from '@/assets/icons/ArrowBack.tsx'
import { Play } from '@/assets/icons/Play.tsx'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

type LearnModalType = {
  title: string
  question: string
  answer: string
  shots: number
}
export const LearnModal: FC<LearnModalType> = ({ title, answer, question, shots }) => {
  const classNames = {
    subtitle: clsx(s.subtitle),
    shots: clsx(s.shots),
    questionWrapper: clsx(s.questionWrapper),
    ansverBlock: s.answerBlock,
    iconSettings: s.openIcon,
    closeButtonContainer: s.closeButtonContainer,
    closeButton: s.closeButtonIcon,
  }

  const [hidden, setHidden] = useState(false)

  return (
    <Dialog.Root>
      {/* Для всех частей диалога. defaultOpen - use when you do not need to control its open state; open - the controlled open  state of dialog; onOpenChange - event handler; modal - for visible screen reader */}
      <Dialog.Trigger asChild>
        {/*  The button that opens the dialog. asChild - changed default rendered element.  */}
        <Button variant={'link'}>
          <Play color={'white'} className={classNames.iconSettings} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {/* portals overlay and content parts into the body. forceMount - add more controls, and when needed useful controlling animation with React and others animation libraries. container - ?*/}
        <Dialog.Overlay asChild className={s.overlay}>
          <Dialog.Close className={classNames.closeButtonContainer}>
            <div className={classNames.closeButton}>
              <ArrowBack color={'white'} className={classNames.iconSettings} />
              Back to Pack List
            </div>
          </Dialog.Close>
          {/*  A layer that covers the inert portion of the view when the dialog is open. asChild - change the default rendered for the one passed as a child. forceMount - ...;  */}
        </Dialog.Overlay>
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.title}>
            <Typography variant={'Large'}>{`Learn "${title}"`} </Typography>
          </Dialog.Title>
          <div className={classNames.questionWrapper}>
            <Typography
              variant={'Subtitle_1'}
              className={classNames.subtitle}
            >{`Question: ${question}`}</Typography>
            <Typography variant={'Body_2'} className={classNames.shots}>
              Количество попыток ответов на вопрос: {shots}
            </Typography>
          </div>
          {hidden && (
            <div>
              <Typography
                variant={'Subtitle_1'}
                className={classNames.ansverBlock}
              >{`Answer: ${answer}`}</Typography>
              <div>
                <Typography variant={'Subtitle_1'} className={classNames.ansverBlock}>
                  Rate yourself
                </Typography>
                <RadioGroup
                  options={[
                    { id: '1', value: 'Did not know', label: 'Did not know' },
                    { id: '2', value: 'Forgot', label: 'Forgot' },
                    { id: '3', value: 'A lot of thought', label: 'A lot of thought' },
                    { id: '4', value: 'Сonfused', label: 'Сonfused' },
                    {
                      id: '5',
                      value: 'Knew the answer',
                      label: 'Knew the answer',
                    },
                  ]}
                  value={''}
                  onValueChange={() => {}}
                ></RadioGroup>
              </div>
            </div>
          )}
          {hidden ? (
            <Button onClick={() => setHidden(false)}> {'Next question'}</Button>
          ) : (
            <Button onClick={() => setHidden(true)}> Show Answer</Button>
          )}

          {/*<Dialog.Description className={s.description}>Hello!</Dialog.Description>*/}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// <Dialog.Root open={true}>
//   {/* Для всех частей диалога. defaultOpen - use when you do not need to control its open state; open - the controlled open  state of dialog; onOpenChange - event handler; modal - for visible screen reader */}
//   {/*<Dialog.Trigger>*/}
//   {/*  /!*  The button that opens the dialog. asChild - changed default rendered element.  *!/*/}
//   {/*  <Button>Hello</Button>*/}
//   {/*</Dialog.Trigger>*/}
//   <Dialog.Portal>
//     {/* portals overlay and content parts into the body. forceMount - add more controls, and when needed useful controlling animation with React and others animation libraries. container - ?*/}
//     <Dialog.Overlay className={s.overlay}>
//       {/*  A layer that covers the inert portion of the view when the dialog is open. asChild - change the default rendered for the one passed as a child. forceMount - ...;  */}
//     </Dialog.Overlay>
//     <Dialog.Content className={s.content}>
//       <Dialog.Title className={s.title}>
//         {/* An accessible title to be announced when the dialog is open.*/}{' '}
//         <Typography variant={'Large'}>{title}</Typography>
//       </Dialog.Title>
//       askgdasjdl;kfajl;skdj;lajdlsfj;lajsd;lkfj;lkasdjf;lk
//       {/*  Contains content to be rendered in the open dialog. asChild - ...; forceMount - ...; onOpenAutoFocus - event handler called when focus moves into the component after opening. onCloseAutoFocus - event handler called when focus moves to the trigger after closing. onEscapeKeyDown - event handler called when escape key is down. onPointerDownOutside - event handler called when a pointer event occurs outside the bounds of the component; onInteractOutside - event handler when an interaction (pointer or focus event) happens outside the bounds of the component.   */}
//       <Dialog.Close>{/* The button that closes the dialog. asChild - ... . */} X </Dialog.Close>
//       <Dialog.Description className={s.description}>
//         {/*    An optional accessible description to be announced when the dialog is open*/}
//         Hello!
//       </Dialog.Description>
//     </Dialog.Content>
//   </Dialog.Portal>
// </Dialog.Root>

// export const LearnModal = () => (
//   <Dialog.Root>
//     <Dialog.Trigger asChild>
//       <button className={`${s.Button} ${s.violet}`}>Edit profile</button>
//     </Dialog.Trigger>
//     <Dialog.Portal>
//       <Dialog.Overlay className={s.DialogOverlay} />
//       <Dialog.Content className={s.DialogContent}>
//         <Dialog.Title className={s.DialogTitle}>Edit profile</Dialog.Title>
//         <Dialog.Description className={s.DialogDescription}>
//           Make changes to your profile here. Click save when you are done.
//         </Dialog.Description>
//         <fieldset className={s.Fieldset}>
//           <label className={s.Label} htmlFor="name">
//             Name
//           </label>
//           <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
//         </fieldset>
//         <fieldset className={s.Fieldset}>
//           <label className={s.Label} htmlFor="username">
//             Username
//           </label>
//           <input className={s.Input} id="username" defaultValue="@peduarte" />
//         </fieldset>
//         <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
//           <Dialog.Close asChild>
//             <button className={`${s.Button} ${s.green}`}>Save changes</button>
//           </Dialog.Close>
//         </div>
//         <Dialog.Close asChild>
//           <button className={s.IconButton} aria-label="Close">
//             {/*<Cross2Icon />*/}X
//           </button>
//         </Dialog.Close>
//       </Dialog.Content>
//     </Dialog.Portal>
//   </Dialog.Root>
// )
