import { FC } from 'react'

type ErrorType = {
  errorMessage: string
}
export const ErrorPage: FC<ErrorType> = ({ errorMessage }) => {
  return (
    <div>
      <p>404</p>
      {errorMessage}
    </div>
  )
}
