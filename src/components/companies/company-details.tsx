import {
  Flex,
  FormRow,
  PrimaryButton,
  TextField,
  TextareaField,
  useForm,
} from "@ripple/design-system"

export const CompanyDetails = () => {
  const { getFieldProps, formProps } = useForm({
    fields: {
      name: { type: "text" },
      descriptio: { type: "text" },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Flex as="form" {...formProps} css={{ p: 3 }} direction="column">
      <FormRow>
        <TextField label="Name" {...getFieldProps("name")} />
      </FormRow>
      <FormRow>
        <TextareaField label="Description" {...getFieldProps("descriptio")} />
      </FormRow>
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </Flex>
  )
}
