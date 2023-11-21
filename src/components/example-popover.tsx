import { Popover, PopoverOptions, SecondaryButton, Text } from "@ripple/design-system"

export const ExamplePopover = (props: PopoverOptions) => {
  return (
    <Popover {...props}>
      <Popover.Trigger>
        <SecondaryButton css={{ w: 300 }}>Show me something</SecondaryButton>
      </Popover.Trigger>
      <Popover.Content maxWidth={300}>
        <Text>
          Bacon ipsum dolor amet prosciutto turducken pig pancetta alcatra flank drumstick beef
          meatloaf shoulder fatback hamburger. Cow short ribs ham, flank ham hock tenderloin pork
          chop bresaola beef. Ham biltong bacon jerky pig.
        </Text>
      </Popover.Content>
    </Popover>
  )
}
