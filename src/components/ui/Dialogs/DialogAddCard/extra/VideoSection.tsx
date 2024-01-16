import sP from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {QuestionVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/QuestionVideo.tsx"
import {AnswerVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/AnswerVideo.tsx"

export const VideoSection = (props: Props) => {
    return (
        <div>
            <div className={sP.DialogDescription}>
                <QuestionVideo setVideoLink={props.setVideoQuestionLink}/>
                <AnswerVideo setVideoLink={props.setAnswerQuestionLink}/>
            </div>
        </div>
    )
}

type Props = {
    setVideoQuestionLink: (value: string) => void
    setAnswerQuestionLink: (value: string) => void
}