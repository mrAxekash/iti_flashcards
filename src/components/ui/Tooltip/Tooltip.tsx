import * as RTooltip from '@radix-ui/react-tooltip'

type Props = {}
export const Tooltip = (props: Props) => {
  return (
    <div>
      <RTooltip.Provider>
        <RTooltip.Root>
          <RTooltip.Trigger />
          <RTooltip.Portal>
            <RTooltip.Content>
              <RTooltip.Arrow />
            </RTooltip.Content>
          </RTooltip.Portal>
        </RTooltip.Root>
      </RTooltip.Provider>
    </div>
  )
}
