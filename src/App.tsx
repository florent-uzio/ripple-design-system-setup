import { ToastList, ToastProvider, rippleTheme, useThemeSetup } from "@ripple/design-system"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./pages/routes"

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
    <BrowserRouter>
      {/* @ts-expect-error Conflicts React 17 used in the DS and React 18 used in this repo. But works fine */}
      <ToastProvider>
        <AppRoutes />
        <ToastList placement="left" />
      </ToastProvider>
    </BrowserRouter>
  )
}
