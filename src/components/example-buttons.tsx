import {
  Flex,
  Heading,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "@ripple/design-system"

export const ExampleButtons = () => {
  return (
    <Flex direction="column" gap={3}>
      <Heading>Example Buttons</Heading>
      <Flex alignContent="center" gap={4}>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
      </Flex>
    </Flex>
  )
}
