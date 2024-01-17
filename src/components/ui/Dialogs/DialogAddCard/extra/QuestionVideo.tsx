import {z} from "zod"
import sP from "@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss"
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field"
import {Button} from "@/components/ui/Button"
import sC from "@/components/ui/Dialogs/common/Dialogs.module.scss"
import {SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    videoQuestion: z.string().min(3), // todo: maybe add youtube check
})

const label = 'Question Youtube id'

export const QuestionVideo = (props: Props) => {
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.setVideoLink(data.videoQuestion)
    }

    const {
        handleSubmit,
        control,
    } = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            videoQuestion: '',
        },
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={sP.textFieldContainer}>
                <div className={sP.element}>
                    <ControlledTextField
                        name={'videoQuestion'}
                        placeholder={'HPU9xqdta3E'}
                        label={label}
                        control={control}
                    />
                </div>
                <div className={sC.container}>
                    <Button variant="secondary" className={sC.halfButton}>
                        Approve
                    </Button>
                    <Button variant="secondary" className={sC.halfButton}>
                        Cancel
                    </Button>
                </div>

            </div>
        </form>
    )
}

type FormValues = z.input<typeof schema>

type Props = {
    setVideoLink: (value: string) => void
}
