import {useRef} from "react"
import sC from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"

const schema = z.object({
    videoQuestion: z.string().min(3), // todo: maybe add youtube check
    videoAnswer: z.string().min(3),
})

export const VideoSection = (props: PropsType) => {
    const formRef = useRef<HTMLFormElement | null>(null)

    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            videoQuestion: '',
            videoAnswer: '',
        },
    })

    return (
        <div>
            <div className={sC.DialogDescription}>
                <form ref={formRef}>
                    <div className={sC.textFieldContainer}>
                        <div className={sC.element}>
                            <ControlledTextField
                                name={'videoQuestion'}
                                placeholder={'interesting question'}
                                label={'Question'}
                                control={control}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

type PropsType = {
    videoQuestionLink: string
    setVideoQuestionLink: (value: string) => void
    videoAnswerLink: string
    setAnswerQuestionLink: (value: string) => void
}



type FormValues = z.input<typeof schema>