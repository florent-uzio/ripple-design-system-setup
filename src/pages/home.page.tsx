import { DropdownField, Flex, Heading, PrimaryLink, useFieldControl } from "@ripple/design-system"
import {
  ExampleButtons,
  ExampleForm,
  ExampleLogin,
  ExamplePopover,
  ExampleTablePagination,
  ExampleToast,
} from "../components"

export const HomePage = () => {
  const { fieldProps } = useFieldControl({ type: "dropdown" })
  const { value } = fieldProps

  return (
    <>
      <DropdownField
        {...fieldProps}
        css={{
          px: 5,
          py: 7,
        }}
        label="Which example component to display?"
        name="example_component"
      >
        <DropdownField.Option value="buttons">Buttons</DropdownField.Option>
        <DropdownField.Option value="form">Form</DropdownField.Option>
        <DropdownField.Option value="popover">Popover</DropdownField.Option>
        <DropdownField.Option value="toast">Toast</DropdownField.Option>
        <DropdownField.Option value="login">Login</DropdownField.Option>
        <DropdownField.Option value="table">Table + Pagination</DropdownField.Option>
        {/* <DropdownField.Option value="tabs">Tabs</DropdownField.Option> */}
      </DropdownField>
      <Flex css={{ px: 5 }} direction="column" gap={4}>
        {value === "buttons" && <ExampleButtons />}
        {value === "toast" && <ExampleToast />}
        {value === "form" && <ExampleForm />}
        {value === "popover" && <ExamplePopover />}
        {value === "login" && <ExampleLogin />}
        {value === "table" && <ExampleTablePagination />}
      </Flex>
      <Flex css={{ px: 5, py: 2 }} direction="column" gap={2}>
        <Heading>Primary Link Example</Heading>
        <PrimaryLink to="company/1" css={{ width: 300 }}>
          Go to Company page
        </PrimaryLink>
      </Flex>
    </>
  )
}
