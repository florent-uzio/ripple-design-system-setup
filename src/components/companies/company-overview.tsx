import { Flex, TertiaryLink } from "@ripple/design-system"
import { Route, Routes } from "react-router"
import { CompanyContacts } from ".."
import { CompanyDetails } from "./company-details"
import { CompanyTabs } from "./company-tabs"

export const CompanyOverview = () => {
  return (
    <Flex css={{ p: 3 }} direction="column">
      <TertiaryLink to="/" css={{ width: 100, mb: 3 }}>
        Back Home
      </TertiaryLink>
      <CompanyTabs />

      <Flex>
        <Routes>
          <Route index={true} element={<CompanyDetails />} />
          <Route path="contacts" element={<CompanyContacts />} />
        </Routes>
      </Flex>
    </Flex>
  )
}
