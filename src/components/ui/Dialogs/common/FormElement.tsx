import sC from "@/components/ui/Dialogs/DialogsParrent/DialogsParrent.module.scss"
import {ControlledTextField, ControlledTextFieldProps} from "@/components/ui/controlled/controlled-text-field"
import {FieldValues} from "react-hook-form"

export const FormElement = <TFieldValues extends FieldValues>(props: ControlledTextFieldProps<TFieldValues>) => {
    return (
        <div className={sC.textFieldContainer}>
            <div className={sC.element}>
                <ControlledTextField
                    name={'videoQuestion'}
                    placeholder={'interesting question'}
                    label={'Question'}
                    control={props.control}
                />
            </div>
        </div>
    )
}

type Props = {

}