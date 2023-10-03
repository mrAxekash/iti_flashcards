import { useEffect, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'
import { v4 } from 'uuid'

import s from './ArticlePagination.module.scss'
import { usePagination, DOTS } from './usePagination'

export const ArticlePagination = (props: PropsType) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]

  // vars for state and styles
  const [isDisabled, setIsDisabled] = useState(false)
  // const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsDisabled(currentPage == 1)
    // setIsSelected(pageNumber === currentPage)
  }, [currentPage])

  const isSelected = (pageNumber: number) => {
    return pageNumber === currentPage
  }

  return (
    <div className={clsx(s.paginationContainer, className)}>
      <div
        className={clsx(s.paginationItem, isDisabled && s.disabled)}
        onClick={!isDisabled ? onPrevious : () => {}}
      >
        <ChevronLeftIcon className={isDisabled ? s.disabled : ''} />
      </div>
      {paginationRange &&
        paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return (
              <div key={v4()} className={clsx(s.paginationItem, s.dots)}>
                ...
              </div>
            )
          }

          return (
            <div
              key={v4()}
              className={clsx(s.paginationItem, {
                [s.selected]: isSelected(+pageNumber),
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          )
        })}
      <li
        className={clsx(s.paginationItem, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <ChevronRightIcon />
      </li>
    </div>
  )
}

type PropsType = {
  onPageChange: (value: number | string) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
}
