import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import textfieldStyle from './Textfield.module.scss'

import { Eye } from '@/src/assets/icons/Eye.tsx'
import { InvisibilityOff } from '@/src/assets/icons/InvisibilityOff.tsx'
import { Search } from '@/src/assets/icons/Search.tsx'

export type TextfieldPropsType = {
  onChangeValue?: (value: string) => void
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  containerProps?: ComponentProps<'div'>
} & ComponentPropsWithoutRef<'input'>

export const Textfield = forwardRef<HTMLInputElement, TextfieldPropsType>(
  (
    {
      errorMessage,
      placeholder,
      type,
      containerProps,
      labelProps,
      label,
      onChange,
      disabled,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowButtonPasswordShowed = type === 'password'
    const isShowIconSearch = type === 'search'

    const finalType = getFinalType(type, showPassword)

    const classNames = {
      container: clsx(textfieldStyle.container, containerProps?.className),
      wrapper: clsx(textfieldStyle.inputWrapper),
      button: clsx(
        type === 'password' && textfieldStyle.button,
        type === 'search' && textfieldStyle.buttonSearch
      ),
      inputField: clsx(
        textfieldStyle.inputField,
        type === 'search' && textfieldStyle.inputFieldSearch,
        errorMessage && textfieldStyle.inputError
      ),
      label: clsx(textfieldStyle.label, disabled && textfieldStyle.disabled, labelProps?.className),
      buttonSearch: clsx(textfieldStyle.buttonSearch),
      subField: clsx(textfieldStyle.subField, textfieldStyle.error),
    }

    return (
      <div className={classNames.container}>
        {/*Add Textarea component for label*/}
        {label && <label className={classNames.label}> {label}</label>}
        <div className={classNames.wrapper}>
          <input
            type={finalType}
            className={classNames.inputField}
            placeholder={'Hello'}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
          {isShowButtonPasswordShowed && (
            <button
              onClick={() => setShowPassword(!showPassword)}
              className={classNames.button}
              disabled={disabled}
              type={'button'}
            >
              {showPassword ? <InvisibilityOff /> : <Eye disabled={disabled} />}
            </button>
          )}
          {isShowIconSearch && (
            <button className={classNames.buttonSearch}>
              <Search disabled={disabled} />
            </button>
          )}
        </div>
        {/*add Textarea component for error message*/}
        {errorMessage && <div className={classNames.subField}>{errorMessage}</div>}
      </div>
    )
  }
)

const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}

/*
addons:
+added type button in button
*/
