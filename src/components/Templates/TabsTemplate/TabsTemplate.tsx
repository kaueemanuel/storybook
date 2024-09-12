import { useMemo, useState } from "react"
import { Location, NavigateFunction } from "react-router-dom"

import { TabControlsProps, Tabs, TabsProps } from "../../Tabs/Tabs"
import { Container } from "./TabsTemplate.styles"

interface FloatingTabs extends TabControlsProps {
  onClose: () => void
  path: string
}

export interface TabsTemplateProps {
  tabsProps: Omit<TabsProps, "useLocation" | "navigate">
  floatingTabs?: FloatingTabs[]
  bgColor?: string
  navigate: NavigateFunction
  useLocation: () => Location
}

export const TabsTemplate: React.FC<TabsTemplateProps> = ({
  tabsProps,
  bgColor,
  floatingTabs = [],
  navigate,
  useLocation,
}) => {
  const [selectedTab, setSelectedTab] = useState<number | null>()

  const [height, negativeNavHeight, headerContentComponent] = useMemo(() => {
    const selectedTabAux =
      selectedTab || selectedTab === 0
        ? tabsProps?.tabs[selectedTab]
        : undefined

    if (!selectedTabAux) {
      return ["82px", "0px", undefined]
    }

    const heightAux = selectedTabAux.height ?? "82px"
    const negativeNavHeightAux = selectedTabAux.negativeNavHeight ?? "0px"

    const headerContentComponentAux = selectedTabAux.headerContent ? (
      <div className="header-content">{selectedTabAux.headerContent}</div>
    ) : undefined

    return [heightAux, negativeNavHeightAux, headerContentComponentAux]
  }, [selectedTab, tabsProps?.tabs])

  const { tabs, ...otherTabsProps } = tabsProps

  return (
    <Container
      height={height}
      bgColor={bgColor}
      negativeNavHeight={negativeNavHeight}
    >
      {headerContentComponent}
      <div className="tab-content">
        <Tabs
          withHash={false}
          tabs={[...tabs, ...floatingTabs]}
          {...otherTabsProps}
          selectedTab={selectedTab}
          getSelectedTab={(tab) => setSelectedTab(tab)}
          navigate={navigate}
          useLocation={useLocation}
        />
      </div>
    </Container>
  )
}
