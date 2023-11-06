import {
  DropdownField,
  EmailField,
  Flex,
  FormRow,
  Heading,
  PhoneField,
  PrimaryButton,
  TextField,
  useForm,
} from "@ripple/design-system"

const fieldCSS = { w: 300 }

export const ExampleForm = () => {
  const { formProps, getFieldProps, isValid } = useForm({
    fields: {
      name: { type: "text" },
      email: { type: "email" },
      phone: { type: "phone" },
      role: { type: "dropdown" },
      favoriteMovie: { type: "radio" },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Heading>Example Form</Heading>

      <Flex as="form" {...formProps} direction="column" gap={2}>
        <FormRow>
          <TextField css={fieldCSS} {...getFieldProps("name")} label="Name" />
        </FormRow>
        <FormRow>
          <EmailField css={fieldCSS} {...getFieldProps("email")} label="Email" />
        </FormRow>
        <FormRow>
          <PhoneField css={fieldCSS} {...getFieldProps("phone")} label="Phone" />
        </FormRow>
        <FormRow>
          <DropdownField css={fieldCSS} {...getFieldProps("role")} label="Role">
            <DropdownField.Option value="APP_ADMIN">App Admin</DropdownField.Option>
            <DropdownField.Option value="COMPANY_ADMIN">Company Admin</DropdownField.Option>
            <DropdownField.Option value="USER">User</DropdownField.Option>
          </DropdownField>
        </FormRow>

        <PrimaryButton css={{ w: 130 }} disabled={!isValid} type="submit">
          See Values
        </PrimaryButton>
      </Flex>
    </>
  )
}
