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

    return (
        <div>
            <div className={sP.DialogDescription}>
                {
                    !isQuestionEdit
                        ? <>
                            {
                                props.youtubeQuestionId !== ''
                                    ? <QuestionVideo setVideoLink={props.setYoutubeQuestionId}/>
                                    : <>
                                        <div className={sC.dummyVideo}>Question video</div>
                                        <Button variant="secondary" className={sC.button}>
                                            Change video
                                        </Button>
                                    </>
                            }
                        </>

                        : <MyYouTube videoId={props.youtubeQuestionId}/>
                }
                <div>
                    {
                        !isAnswerEdit
                            ? <>
                                {props.youtubeAnswerId !== ''
                                    ? <AnswerVideo setVideoLink={props.setYoutubeAnswerId}/>
                                    : <>
                                        <div className={sC.dummyVideo}>Answer video</div>
                                        <Button variant="secondary" className={sC.button}>
                                            Change video
                                        </Button>
                                    </>
                                }
                            </>
                            : <MyYouTube videoId={props.youtubeQuestionId}/>

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