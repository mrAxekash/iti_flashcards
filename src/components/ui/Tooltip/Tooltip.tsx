import { FC } from 'react'

import * as RTooltip from '@radix-ui/react-tooltip'

import s from './Tooltip.module.scss'

import { Typography } from '@/components/ui/Typography'

type TooltipProps = {
  triggerData: string
}
export const Tooltip: FC<TooltipProps> = ({ triggerData }) => {
  return (
    <div>
      <RTooltip.Provider delayDuration={500}>
        <RTooltip.Root>
          <RTooltip.Trigger>
            <Typography variant={'Body_2'}>{triggerData}</Typography>
          </RTooltip.Trigger>
          <RTooltip.Portal>
            <RTooltip.Content
              side={'top'}
              align={'start'}
              sideOffset={5}
              className={s.TooltipContent}
            >
              <Typography variant={'Body_2'}>{triggerData}</Typography>
              {/*<RTooltip.Arrow />*/}
            </RTooltip.Content>
          </RTooltip.Portal>
        </RTooltip.Root>
      </RTooltip.Provider>
    </div>
  )
}
