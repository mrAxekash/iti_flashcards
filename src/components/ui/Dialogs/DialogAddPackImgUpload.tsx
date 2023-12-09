import {useState} from "react"
import s from "@/components/ui/Dialogs/DialogAddNewCard/DialogAddNewCard.module.scss"

export const DialogAddPackImgUpload = () => {
  const [cropImg, setCropImg] = useState<string | undefined>(undefined)

  return (
    <div>
      DialogAddPackImgUpload here
      <div className={s.dummyQuestionAnswer}>Plz select deck img... if you wish</div>
    </div>
  )
}