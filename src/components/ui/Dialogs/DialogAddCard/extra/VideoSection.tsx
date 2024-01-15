import sC from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field"
import {SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Button} from "@/components/ui/Button"
import imgUpload from "@/assets/icons/imgUpload.svg"
import sT from "@/common/commonStyles/tables.module.scss"

const schema = z.object({
    videoQuestion: z.string().min(3), // todo: maybe add youtube check
    videoAnswer: z.string().min(3),
})

export const VideoSection = (props: PropsType) => {
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={sC.textFieldContainer}>
                        <div className={sC.element}>
                            <ControlledTextField
                                name={'videoQuestion'}
                                placeholder={'https://youtu.be/ChPGLSuqIng?si=Y1qRo2ORBQ-snQt-'}
                                label={'Question video link'}
                                control={control}
                            />
                        </div>
                        <div className={sC.element}>
                            <ControlledTextField
                                name={'videoAnswer'}
                                placeholder={'https://youtu.be/QJe3QfFbJoY?si=iRnJyYi1xZYU12QW'}
                                label={'Question answer link'}
                                control={control}
                            />
                        </div>
                        <Button variant="secondary">
                            <img src={imgUpload} alt="trashIcon" className={sT.trashIcon}/>
                            Change cover
                        </Button>
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