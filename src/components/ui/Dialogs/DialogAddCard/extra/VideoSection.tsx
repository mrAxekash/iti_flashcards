import sP from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {QuestionVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/QuestionVideo.tsx"
import {AnswerVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/AnswerVideo.tsx"

export const VideoSection = () => {
    return (
        <div>
            <div className={sP.DialogDescription}>
                <QuestionVideo />
                <AnswerVideo />
            </div>
        </div>
    )
}