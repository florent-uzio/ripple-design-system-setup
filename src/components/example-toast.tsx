import { Flex, Heading, PrimaryButton, useToast } from "@ripple/design-system"

export const ExampleToast = () => {
  const toast = useToast()

  return (
    <>
      <Heading>Toasts</Heading>
      <Flex alignContent="center" gap={4}>
        <PrimaryButton
          onClick={() => {
            toast.success("Success Toast")
          }}
        >
          Success
        </PrimaryButton>

        <PrimaryButton
          onClick={() => {
            toast.warning("Warning Toast")
          }}
        >
          Warning
        </PrimaryButton>

        <PrimaryButton
          onClick={() => {
            toast.error("Error Toast")
          }}
        >
          Error
        </PrimaryButton>
      </Flex>
    </>
  )
}
