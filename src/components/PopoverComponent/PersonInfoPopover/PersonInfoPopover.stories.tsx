import { Meta, StoryFn } from "@storybook/react"

import { PersonInfo } from "../types/PopoverTypes"
import { PopoverPersonInfo, PersonInfoPopoverProps } from "./PersonInfoPopover"

export default {
  title: "Components/DataDisplay/Popover/PopoverPersonInfo",
  component: PopoverPersonInfo,
  argTypes: {
    personInfos: { control: "number" },
  },
} as Meta

const Template: StoryFn<PersonInfoPopoverProps> = (args) => (
  <PopoverPersonInfo {...args} />
)

export const PearsonLoading = Template.bind({})
PearsonLoading.args = {
  personInfos: undefined, // Carregando
}

const personInfos: PersonInfo = {
  crmFunction: "Gerente Financeiro",
  mail: "renato.aji@minhaempresa.com.br",
  phone: "(55) 99647-4785",
  cellPhone: "(55) 3220-1350",
}

export const PersonLoaded = Template.bind({})
PersonLoaded.args = {
  personInfos: personInfos, // Simula a pessoa carregada
}
