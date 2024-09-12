export interface ModuleElementProps {
  tabsModule: () => void
}

export const ModuleElement = ({ tabsModule }: ModuleElementProps) => {
  tabsModule()
  return <></>
}
