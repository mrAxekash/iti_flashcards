import { useState, ComponentPropsWithoutRef, ElementType } from 'react'

import inputStyle from './Textfield.module.scss'

import { Eye } from '@/src/components/ui/icons/Eye.tsx'
import { EyeOff } from '@/src/components/ui/icons/EyeOff.tsx'
import { Search } from '@/src/components/ui/icons/Search.tsx'

type InputPropsType<E extends ElementType = 'input'> = {
  label?: string
  type: 'text' | 'password' | 'search'
  errorMessage?: string | null
  isDisabled?: boolean
  as?: E
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<E>

export const Textfield = <E extends ElementType = 'input'>(
  props: InputPropsType & Omit<ComponentPropsWithoutRef<E>, keyof InputPropsType<E>>
) => {
  const { label, type, errorMessage, isDisabled, as: Component = 'input', ...rest } = props

  const [eyeState, setEyeState] = useState(false)

  const finalType = getFinalType(type, eyeState)
  const eyeChangeHandler = () => {
    setEyeState(!eyeState)
  }

  return (
    <div className={` ${inputStyle[type]}`}>
      <label
        className={`${
          type === 'text' || type === 'password' ? inputStyle.primaryTitle : inputStyle.deleteField
        } ${isDisabled && inputStyle.disabled} `}
      >
        {label}
      </label>
      <div
        className={`${type === 'search' && inputStyle.iconPassword} ${
          type === 'password' && inputStyle.iconPassword
        }`}
      >
        {type === 'password' && (
          <button
            onClick={eyeChangeHandler}
            className={`${inputStyle.button} ${isDisabled && inputStyle.disabled}`}
            disabled={isDisabled}
          >
            {eyeState && <Eye disabled={isDisabled} />}
            {!eyeState && <EyeOff disabled={isDisabled} />}
          </button>
        )}
        {type === 'search' && <Search />}
        <Component
          type={finalType}
          className={` ${errorMessage && inputStyle.error} ${inputStyle.defaultInput} ${
            type === 'search' && inputStyle.searchInput
          }
            ${type === 'password' && inputStyle.passwordInput}

          }`}
          disabled={isDisabled}
          {...rest}
        />
        {errorMessage && <div className={inputStyle.error}>{errorMessage}</div>}
      </div>
    </div>
  )
}

const getFinalType = (
  type: 'text' | 'password' | 'search',
  showPassword: boolean
): 'text' | 'password' | 'search' => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
