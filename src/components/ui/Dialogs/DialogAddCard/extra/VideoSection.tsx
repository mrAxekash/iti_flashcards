import sP from '@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss'
import {QuestionVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/QuestionVideo.tsx"
import {AnswerVideo} from "@/components/ui/Dialogs/DialogAddCard/extra/AnswerVideo.tsx"
import {useEffect} from "react"
import {MyYouTube} from "@/common/MyYouTube.tsx"

export const VideoSection = (props: Props) => {

    // Temp for test
    useEffect(() => {
        console.log('youtubeQuestionId', props.youtubeQuestionId)

    }, [props.youtubeQuestionId])
    useEffect(() => {
        console.log('youtubeAnswerId', props.youtubeAnswerId)

    }, [props.youtubeAnswerId])

    return (
        <div>
            <div className={sP.DialogDescription}>
                {
                    props.youtubeQuestionId !== ''
                        ? <MyYouTube videoId={props.youtubeQuestionId} />
                        : <QuestionVideo setVideoLink={props.setYoutubeQuestionId}/>
                }
                <div>
                    {
                        props.youtubeAnswerId !== ''
                            ? <MyYouTube videoId={props.youtubeAnswerId} />
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