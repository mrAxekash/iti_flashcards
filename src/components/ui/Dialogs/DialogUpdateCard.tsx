import {useRef, useState} from 'react'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {SelectedCardUpdate} from '@/common/types.ts'
import {ControlledTextField} from '@/components/ui/controlled/controlled-text-field'
import sC from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {DialogsParrent} from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.tsx'
import {useUpdateCardMutation} from '@/services/cards/cards.service.ts'
import {CardImgUpload} from "@/components/ui/Dialogs/common/CardImgUpload.tsx"

export const DialogUpdateCard = (props: PropsType) => {
    const [isCoverAnswerChanged, setIsCoverAnswerChanged] = useState(false)
    const [isCoverQuestionChanged, setIsCoverQuestionChanged] = useState(false)
    const [cropQuestionImg, setCropQuestionImg] = useState<string | undefined>(props.selectedCard.answerImg)
    const [cropAnswerImg, setCropAnswerImg] = useState<string | undefined>(props.selectedCard.questionImg)

    const schema = z.object({
        question: z.string().min(2).max(500),
        answer: z.string().min(2).max(500),
    })

    type FormValues = z.input<typeof schema>

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            question: props.selectedCard.question,
            answer: props.selectedCard.answer,
        },
    })

    const formRef = useRef<HTMLFormElement | null>(null)

    const [updateCard] = useUpdateCardMutation()

    const handleFormSubmitted = handleSubmit(values => {
        onUpdateCard(values.question, values.answer)
        reset()
        props.setOpen(false)
    })

    // on submit form emulation
    const onSubmitEmulation = () => {
        if (!formRef.current) return
        formRef.current.submit = handleFormSubmitted
        formRef.current.submit()
    }

    const onUpdateCard = (question: string, answer: string) => {
        if (!question || !answer || !props.id) return

        // Check if either question or answer has changed
        const isQuestionChanged = props.question !== question
        const isAnswerChanged = props.answer !== answer

        if (isQuestionChanged || isAnswerChanged) {
            const formData = new FormData()

            // Prepare the data object with only the changed properties
            if (isQuestionChanged) {
                formData.append('question', question)
            }
            if (isAnswerChanged) {
                formData.append('answer', answer)
            }

            updateCard({
                id: props.id,
                data: formData,
            })
        }

        props.setOpen(false)
    }

    const onClose = () => {
        reset()
        props.setOpen(false)
    }

    return (
        <DialogsParrent
            title={'Edit Card'}
            open={props.open}
            setOpen={onClose}
            onButtonAction={onSubmitEmulation}
            actionButtonText={'Save Changes'}
            isButtonDisable={Object.keys(errors).length > 0}
        >
            <div className={sC.DialogDescription}>
                <form ref={formRef}>
                    <div className={sC.dialogElement}>
                        <div className={sC.textFieldContainer}>
                            <div className={sC.element}>
                                <ControlledTextField name={'question'} label={'Question'} control={control}/>
                            </div>
                        </div>
                        <div className={sC.textFieldContainer}>
                            <div className={sC.element}>
                                <ControlledTextField name={'answer'} label={'Answer'} control={control}/>
                            </div>
                        </div>
                    </div>

                </form>


                <div className={sC.dialogElement}>
                    <CardImgUpload
                        cropQuestionImg={cropQuestionImg}
                        cropAnswerImg={cropAnswerImg}
                        setCropQuestionImg={setCropQuestionImg}
                        setCropAnswerImg={setCropAnswerImg}
                        onApproveAnswerCallback={() => {
                        }}
                        onApproveQuestionCallback={() => {
                        }}
                    />
                </div>
            </div>
        </DialogsParrent>
    )
}

type PropsType = {
    id: string
    question: string
    answer: string
    open: boolean
    setOpen: (value: boolean) => void
    selectedCard: SelectedCardUpdate
    setSelectedCard: (value: SelectedCardUpdate) => void
}
