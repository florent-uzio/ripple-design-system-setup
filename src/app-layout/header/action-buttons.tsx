import { Flex, PrimaryButton, TertiaryButton, UserAvatarCircleIcon } from "@ripple/design-system"

export const ActionButtons = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <TertiaryButton>Technical Support</TertiaryButton>
      <PrimaryButton>Request a Mentor</PrimaryButton>
      <UserAvatarCircleIcon />
    </Flex>
  )
}
