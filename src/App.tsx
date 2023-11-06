import {
  Flex,
  SheetProvider,
  ToastList,
  ToastProvider,
  rippleTheme,
  useThemeSetup,
} from "@ripple/design-system"
import { Header } from "./app-layout"
import { ExampleButtons, ExampleForm, ExampleToast } from "./components"

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
    <ToastProvider>
      <SheetProvider>
        <Header />
        <Flex css={{ px: 5, py: 7 }} direction="column" gap={4}>
          <ExampleButtons />
          <ExampleToast />
          <ExampleForm />
        </Flex>
        <ToastList placement="left" />
      </SheetProvider>
    </ToastProvider>
  )
}
