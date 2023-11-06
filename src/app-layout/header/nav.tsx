import { Flex, Text } from "@ripple/design-system"

export const Nav = () => {
  return (
    <Flex alignItems="center" gap={3}>
      <Text css={{ color: "$text200" }} weight="bold">
        Home
      </Text>
      <Text css={{ color: "$text200" }} weight="bold">
        Users
      </Text>
      <Text css={{ color: "$text200" }} weight="bold">
        Contacts
      </Text>
    </Flex>
  )
}
