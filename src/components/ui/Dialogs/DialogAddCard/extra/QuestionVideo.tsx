import sP from "@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss"
import {Button} from "@/components/ui/Button"
import sC from "@/components/ui/Dialogs/common/Dialogs.module.scss"
import {Textfield} from "@/components/ui/Textfield"

const label = 'Question Youtube id'

export const QuestionVideo = (props: Props) => {

    return (
        <div className={sP.textFieldContainer}>
            <div className={sP.element}>
                <Textfield
                    placeholder={'HPU9xqdta3E'}
                    label={label}
                    value={props.value}
                    onChange={e => props.setValue(e.currentTarget.value)}
                />
            </div>
            <div className={sC.container}>
                <Button variant="secondary" className={sC.halfButton} onClick={props.onApprove}>
                    Approve
                </Button>
                <Button variant="secondary" className={sC.halfButton} onClick={props.onCancel}>
                    Cancel
                </Button>
            </div>

        </div>
    )
}

type Props = {
    value: string
    setValue: (value: string) => void
    onApprove: () => void
    onCancel: () => void
}
