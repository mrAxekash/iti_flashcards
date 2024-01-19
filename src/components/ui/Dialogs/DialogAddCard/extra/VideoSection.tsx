import sP from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {ApproveCancelTextField} from "@/components/ui/Dialogs/DialogAddCard/extra/ApproveCancelTextField.tsx"
import {useState} from "react"
import {extractYouTubeVideoId} from "@/components/ui/Dialogs/common/utils.ts"
import {VideoElement} from "@/components/ui/Dialogs/DialogAddCard/extra/VideoElement.tsx"

export const VideoSection = (props: Props) => {
    const [isQuestionEdit, setIsQuestionEdit] = useState(false)
    const [isAnswerEdit, setIsAnswerEdit] = useState(false)

    const [tempQuestionValue, setTempQuestionValue] = useState('')
    const [tempAnswerValue, setTempAnswerValue] = useState('')

    const {videoId: questionVideoId, success: questionVideoIdStatus} = extractYouTubeVideoId(tempQuestionValue)
    const {videoId: answerVideoId, success: answerVideoIdStatus} = extractYouTubeVideoId(tempAnswerValue)

    const onQuestionChangeVideo = () => {
        setIsQuestionEdit(true)
    }

    const onAnswerChangeVideo = () => {
        setIsAnswerEdit(true)
    }

    const onQuestionApprove = () => {
        if (questionVideoIdStatus && questionVideoId) {
            props.setYoutubeQuestionUrl(questionVideoId)
            setIsQuestionEdit(false)
        } else {
            alert('wrong question link')
        }
    }

    const onAnswerApprove = () => {
        if (answerVideoIdStatus && answerVideoId) {
            props.setYoutubeAnswerUrl(tempAnswerValue)
            setIsAnswerEdit(false)
        } else {
            alert('wrong answer link')
        }
    }

    const onQuestionCancel = () => {
        setIsQuestionEdit(false)
    }

    const onAnswerCancel = () => {
        setIsAnswerEdit(false)
    }

    return (
        <div>
            <div className={sP.DialogDescription}>
                {
                    !isQuestionEdit
                        ? <VideoElement
                            youtubeUrl={props.youtubeQuestionUrl}
                            questionVideoIdStatus={questionVideoIdStatus}
                            questionVideoId={questionVideoId}
                            onQuestionChangeVideo={onQuestionChangeVideo}
                        />
                        : <ApproveCancelTextField
                            tempValue={tempQuestionValue}
                            setTempValue={setTempQuestionValue}
                            onApprove={onQuestionApprove}
                            onCancel={onQuestionCancel}
                            label={'Question Youtube id'}
                        />
                }
                <div>
                    {
                        !isAnswerEdit
                            ? <VideoElement
                                youtubeUrl={props.youtubeAnswerUrl}
                                questionVideoIdStatus={answerVideoIdStatus}
                                questionVideoId={answerVideoId}
                                onQuestionChangeVideo={onAnswerChangeVideo}
                            />
                            : <ApproveCancelTextField
                                tempValue={tempAnswerValue}
                                setTempValue={setTempAnswerValue}
                                onApprove={onAnswerApprove}
                                onCancel={onAnswerCancel}
                                label={'Answer Youtube id'}
                            />

                    }

                </div>

            </div>
        </div>
    )
}

type Props = {
    setYoutubeQuestionUrl: (value: string) => void
    setYoutubeAnswerUrl: (value: string) => void
    youtubeQuestionUrl: string
    youtubeAnswerUrl: string
}