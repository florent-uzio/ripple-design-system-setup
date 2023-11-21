import { Flex, ToastList, ToastProvider, rippleTheme, useThemeSetup } from "@ripple/design-system"
import { Header } from "./app-layout"
import { ExampleButtons, ExampleForm, ExamplePopover, ExampleToast } from "./components"

// global css for our render container to get the correct layout
const localGlobalStyles = rippleTheme.globalCss({
  "#root": {
    backgroundColor: "$background200",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
})

export const App = () => {
  useThemeSetup()
  localGlobalStyles()

  return (
    // @ts-expect-error Conflicts React 17 used in the DS and React 18 used in this repo. But works fine
    <ToastProvider>
      <Header />
      <Flex css={{ px: 5, py: 7 }} direction="column" gap={4}>
        <ExampleButtons />
        <ExampleToast />
        <ExampleForm />
        <ExamplePopover />
      </Flex>
      <ToastList placement="left" />
    </ToastProvider>
  )
}
