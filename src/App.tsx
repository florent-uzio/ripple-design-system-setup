import {
  DropdownField,
  Flex,
  ToastList,
  ToastProvider,
  rippleTheme,
  useFieldControl,
  useThemeSetup,
} from "@ripple/design-system"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "./app-layout"
import {
  ExampleButtons,
  ExampleForm,
  ExampleLogin,
  ExamplePopover,
  ExampleToast,
} from "./components"
import { ExampleList } from "./components/example-list"

// global css for our render container to get the correct layout
const localGlobalStyles = rippleTheme.globalCss({
  "#root": {
    backgroundColor: "$background200",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
})

// Create a client
const queryClient = new QueryClient()

export const App = () => {
  useThemeSetup()
  localGlobalStyles()

  const { fieldProps } = useFieldControl({ type: "dropdown" })
  const { value } = fieldProps

  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-expect-error Conflicts React 17 used in the DS and React 18 used in this repo. But works fine */}
      <ToastProvider>
        <Header />
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
        </DropdownField>

        <Flex css={{ px: 5 }} direction="column" gap={4}>
          {value === "buttons" && <ExampleButtons />}
          {value === "toast" && <ExampleToast />}
          {value === "form" && <ExampleForm />}
          {value === "popover" && <ExamplePopover />}
          {value === "login" && <ExampleLogin />}
          {value === "table" && <ExampleList />}
        </Flex>
        <ToastList placement="left" />
      </ToastProvider>
    </QueryClientProvider>
  )
}
