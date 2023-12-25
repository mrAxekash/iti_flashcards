import * as Tooltip from '@radix-ui/react-tooltip'

type Props = {}
export const Tooltip = (props: Props) => {
  return (
    <div>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger />
          <Tooltip.Portal>
            <Tooltip.Content>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}
