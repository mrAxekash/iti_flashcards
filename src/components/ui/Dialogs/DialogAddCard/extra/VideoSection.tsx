import sP from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import sC from "@/components/ui/Dialogs/common/Dialogs.module.scss"
import {QuestionVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/QuestionVideo.tsx"
import {AnswerVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/AnswerVideo.tsx"
import {MyYouTube} from "@/common/MyYouTube.tsx"
import {useState} from "react"
import {Button} from "@/components/ui/Button"

export const VideoSection = (props: Props) => {
    const [isQuestionEdit, setIsQuestionEdit] = useState(false)
    const [isAnswerEdit, setIsAnswerEdit] = useState(false)

    const [tempQuestionValue, setTempQuestionValue] = useState('')

    const onQuestionChangeVideo = () => {
        setIsQuestionEdit(true)
    }

    const onAnswerChangeVideo = () => {
        setIsAnswerEdit(true)
    }

    const onQuestionApprove = () => {
        debugger
        props.setYoutubeQuestionId(tempQuestionValue)
        setIsQuestionEdit(false)
    }

    const onQuestionCancel = () => {
        setIsQuestionEdit(false)
    }

    return (
        <div>
            <div className={sP.DialogDescription}>
                {
                    !isQuestionEdit
                        ? <>
                            {
                                props.youtubeQuestionId !== ''
                                    ? <>
                                        <MyYouTube videoId={props.youtubeQuestionId}/>
                                        <Button variant="secondary" className={sC.button} onClick={onQuestionChangeVideo}>
                                            Change video
                                        </Button>
                                    </>
                                    : <>
                                        <div className={sC.dummyVideo}>Question video</div>
                                        <Button variant="secondary" className={sC.button} onClick={onQuestionChangeVideo}>
                                            Change video
                                        </Button>
                                    </>
                            }
                        </>
                        : <QuestionVideo
                            value={tempQuestionValue}
                            setValue={setTempQuestionValue}
                            onApprove={onQuestionApprove}
                            onCancel={onQuestionCancel}
                        />
                }
                <div>
                    {
                        !isAnswerEdit
                            ? <>
                                {props.youtubeAnswerId !== ''
                                    ? <>
                                        <MyYouTube videoId={props.youtubeQuestionId}/>
                                        <Button variant="secondary" className={sC.button} onClick={onAnswerChangeVideo}>
                                            Change video
                                        </Button>
                                    </>
                                    : <>
                                        <div className={sC.dummyVideo}>Answer video</div>
                                        <Button variant="secondary" className={sC.button} onClick={onAnswerChangeVideo}>
                                            Change video
                                        </Button>
                                    </>
                                }
                            </>
                            : <AnswerVideo setVideoLink={props.setYoutubeAnswerId}/>

                    }

                </div>

            </div>
        </div>
    )
}

type Props = {
    setYoutubeQuestionId: (value: string) => void
    setYoutubeAnswerId: (value: string) => void
    youtubeQuestionId: string
    youtubeAnswerId: string
}

// todo: reduce code duplication

