import { Route, Routes } from "react-router"
import { Layout } from "../../app-layout/app-layout"
import { CompanyOverview } from "../../components"
import { HomePage } from "../home.page"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/company/:companyId/*"
        element={
          <Layout>
            <CompanyOverview />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  )
}
