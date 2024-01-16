import {useEffect, useState} from "react"

export const MyYouTube = (props: Props) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [frameWidth, setFrameWidth] = useState(640)
    const [frameHeight, setFrameHeight] = useState(360)

    useEffect(() => { // for adaptive
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth)
        }
        window.addEventListener("resize", updateWindowDimensions)
        if (width < 992) {
            setFrameWidth(480)
            setFrameHeight(270)
        } else if (width < 768) {
            setFrameWidth(340)
            setFrameHeight(190)
        } else {
            setFrameWidth(640)
            setFrameHeight(360)
        }
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [width])


    return <iframe
        width={frameWidth}
    height={frameHeight}
    src={`https://www.youtube.com/embed/${props.videoId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
}

type Props = {
    videoId: string
}