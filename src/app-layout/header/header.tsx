import { Flex, RippleLogo } from "@ripple/design-system"
import { ActionButtons } from "./action-buttons"
import { Nav } from "./nav"

export const Header = () => {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      css={{
        h: 80,
        minH: 80,
        backgroundColor: "$background100",
        boxShadow: "$medium",
        px: 5,
        // just slightly above the overlay layer from the design system
        // so the header's shadow is on top of `Sheet`s
        zIndex: 110,
      }}
    >
      <Flex gap={3}>
        <RippleLogo width={80} colorMode="auto" />
        <Nav />
      </Flex>

      <ActionButtons />
    </Flex>
  )
}
