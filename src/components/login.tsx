import {
  Card,
  CheckboxField,
  EmailField,
  Flex,
  PrimaryButton,
  RippleLogo,
  SecretField,
  Text,
  TextButton,
  useForm,
} from "@ripple/design-system"
import { ExternalLink } from "./external-link"

export const ExampleLogin = () => {
  const { formProps, getFieldProps, isValid } = useForm({
    fields: {
      email: { type: "email" },
      password: { type: "text" },
      rememberMe: { type: "checkbox", required: false },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Flex alignItems="center" justifyContent="center">
      <Card css={{ minW: "440px", py: 5, px: 4 }}>
        <Flex direction="column" flex={1} gap={2} alignItems="center">
          <RippleLogo width={60} />

          <Text size="xl" weight="bold">
            Welcome Back! Please Log In
          </Text>

          <Text>Enter your password to log in to the Ripple Connect.</Text>
          <Flex
            as="form"
            direction="column"
            css={{ width: "100%" }}
            gap={2}
            alignItems="start"
            {...formProps}
          >
            <EmailField {...getFieldProps("email")} label="Email" name="email" />

            <Flex direction="column" css={{ width: "100%" }} gap={0.5}>
              <SecretField {...getFieldProps("password")} label="Password" name="password" />
              <ExternalLink href="https://google.com" css={{ fontWeight: "$bold" }} size="sm">
                Forgot Password
              </ExternalLink>
            </Flex>

            <CheckboxField
              {...getFieldProps("rememberMe")}
              label="Remember Me"
              name="rememberMe"
              hideOptionalText={true}
            />

            <Text css={{ mx: "auto", mt: 2 }}>
              <TextButton
                onClick={() => {
                  alert("You clicked Privacy Policy")
                }}
              >
                Privacy Policy
              </TextButton>{" "}
              and{" "}
              <TextButton
                onClick={() => {
                  alert("You clicked Terms and Conditions")
                }}
              >
                Terms and Conditions
              </TextButton>
            </Text>

            <PrimaryButton disabled={!isValid} css={{ width: "100%" }} type="submit">
              Continue
            </PrimaryButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
