import { useState, ComponentPropsWithoutRef, ComponentProps } from 'react'

import { clsx } from 'clsx'

import textfieldStyle from './Textfield.module.scss'

import { Eye } from '@/src/assets/icons/Eye.tsx'
import { InvisibilityOff } from '@/src/assets/icons/InvisibilityOff.tsx'
import { Search } from '@/src/assets/icons/Search.tsx'
//import { Search } from '@/src/assets/icons/Search.tsx'

// type InputPropsType<E extends ElementType = 'input'> = {
//   label?: string
//   type: 'text' | 'password' | 'search'
//   errorMessage?: string | null
//   isDisabled?: boolean
//   as?: E
//   onChangeValue?: (value: string) => void
// } & ComponentPropsWithoutRef<E>

// export const Textfield = <E extends ElementType = 'input'>(
//   props: InputPropsType & Omit<ComponentPropsWithoutRef<E>, keyof InputPropsType<E>>
// ) => {
//   const { label, type, errorMessage, isDisabled, as: Component = 'input', ...rest } = props
//
//   const [eyeState, setEyeState] = useState(false)
//
//   const finalType = getFinalType(type, eyeState)
//   const eyeChangeHandler = () => {
//     setEyeState(!eyeState)
//   }
//
//   return (
//     <div className={` ${inputStyle[type]}`}>
//       <label
//         className={`${
//           type === 'text' || type === 'password' ? inputStyle.primaryTitle : inputStyle.deleteField
//         } ${isDisabled && inputStyle.disabled} `}
//       >
//         {label}
//       </label>
//       <div
//         className={`${type === 'search' && inputStyle.iconPassword} ${
//           type === 'password' && inputStyle.iconPassword
//         }`}
//       >
//         {type === 'password' && (
//           <button
//             onClick={eyeChangeHandler}
//             className={`${inputStyle.button} ${isDisabled && inputStyle.disabled}`}
//             disabled={isDisabled}
//           >
//             {eyeState && <Eye disabled={isDisabled} />}
//             {!eyeState && <InvisibilityOff disabled={isDisabled} />}
//           </button>
//         )}
//         {type === 'search' && <Search />}
//         <Component
//           type={finalType}
//           className={` ${errorMessage && inputStyle.error} ${inputStyle.defaultInput} ${
//             type === 'search' && inputStyle.searchInput
//           }
//             ${type === 'password' && inputStyle.passwordInput}
//
//           }`}
//           disabled={isDisabled}
//           {...rest}
//         />
//         {errorMessage && <div className={inputStyle.error}>{errorMessage}</div>}
//       </div>
//     </div>
//   )
// }
////////////////////////////////////////////////////////////////////////////////////

export type TextfieldPropsType = {
  // onChangeValue?: () => void
  value?: string
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const Textfield = (props: TextfieldPropsType) => {
  const { label, errorMessage, type, value, ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  const isShowButtonPasswordShowed = type === 'password'
  const isShowIconSearch = type === 'search'

  const finalType = getFinalType(type, showPassword)

  const classNames = {
    container: clsx(textfieldStyle.container),
    wrapper: clsx(textfieldStyle.inputWrapper),
    button: clsx(textfieldStyle.button),
    input: clsx(textfieldStyle.input),
  }

  return (
    <div className={classNames.container}>
      {/*Add Textarea component for label*/}
      {label && <label> {label}</label>}
      <div className={classNames.wrapper}>
        <input type={finalType} value={value} {...rest} className={classNames.input} />
        {isShowButtonPasswordShowed && (
          <button onClick={() => setShowPassword(!showPassword)} className={classNames.button}>
            {showPassword ? <InvisibilityOff /> : <Eye />}
          </button>
        )}
        {isShowIconSearch && <Search />}
      </div>
      {/*add Textarea component for error message*/}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
