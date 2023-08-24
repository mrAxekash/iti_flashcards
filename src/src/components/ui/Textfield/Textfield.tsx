// import { ComponentPropsWithoutRef, ElementType } from 'react'
//
// export type InputPropsType<E extends ElementType = 'input'> = {
//   variant?: 'primary' | 'password' | 'search'
//   type?: string
//   as?: E
//   className?: string
// } & ComponentPropsWithoutRef<E>
// export const Textfield = <E extends ElementType = 'input'>(
//   props: InputPropsType<E> & Omit<ComponentPropsWithoutRef<E>, keyof InputPropsType<E>>
// ) => {
//   const { variant = 'primary', as: Component = 'input', ...rest } = props
//
//   return (
//     <div>
//       <div>Textfield</div>
//       <div>
//         <Component />
//       </div>
//       <input type={'text'} />
//     </div>
//   ) //<Component {...rest}> </Component>
// }

import { useState } from 'react'

import inputStyle from './Textfield.module.scss'

import { Eye } from '@/src/components/ui/icons/Eye.tsx'
import { EyeOff } from '@/src/components/ui/icons/EyeOff.tsx'
import { Search } from '@/src/components/ui/icons/Search.tsx'

type ImputPropsType = {
  inputTitle?: string
  type: 'text' | 'password' | 'search'
}

export const Textfield: React.FC<ImputPropsType> = props => {
  const { inputTitle, type } = props

  const [eyeState, setEyeState] = useState(false)

  const finalType = getFinalType(type, eyeState)
  const eyeChangeHandler = () => {
    setEyeState(!eyeState)
  }

  return (
    <div className={inputStyle[type]}>
      <div
        className={`${
          type === 'text' || type === 'password' ? inputStyle.primaryTitle : inputStyle.disabled
        }`}
      >
        {inputTitle}
      </div>
      <div
        className={`${type === 'search' && inputStyle.iconPassword} ${
          type === 'password' && inputStyle.iconPassword
        }`}
      >
        {type === 'password' && (
          <button onClick={eyeChangeHandler} className={inputStyle.button}>
            {eyeState && <Eye />}
            {!eyeState && <EyeOff />}
          </button>
        )}
        {type === 'search' && <Search />}
        <input
          type={finalType}
          className={` ${inputStyle.defaultInput} ${type === 'search' && inputStyle.searchInput}
            ${type === 'password' && inputStyle.passwordInput}
             ${inputStyle.defaultInput}
          }`}
        />
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
