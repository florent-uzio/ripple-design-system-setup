import { Flex, FormRow, PrimaryButton, TextField, useForm } from "@ripple/design-system"

export const CompanyContacts = () => {
  const { getFieldProps, formProps } = useForm({
    fields: {
      contact1: { type: "text" },
      contact2: { type: "text" },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Flex as="form" {...formProps} css={{ p: 3 }} direction="column">
      <FormRow>
        <TextField label="Contact 1" {...getFieldProps("contact1")} />
      </FormRow>
      <FormRow>
        <TextField label="Contact 2" {...getFieldProps("contact2")} />
      </FormRow>
      <PrimaryButton type="submit">Save</PrimaryButton>
    </Flex>
  )
}
