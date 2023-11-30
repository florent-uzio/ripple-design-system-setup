import { TabNav } from "@ripple/design-system"
import { useParams } from "react-router"

export const CompanyTabs = () => {
  const { companyId = "blank" } = useParams()

  return (
    // @ts-expect-error React 18 issues
    <TabNav>
      <TabNav.Tab to={`/company/${companyId}`} end={true}>
        Overview
      </TabNav.Tab>
      <TabNav.Tab to={`/company/${companyId}/contacts`}>Contacts</TabNav.Tab>
    </TabNav>
  )
}
