import type { Meta, StoryObj } from "@storybook/react"

import RegistrationHistory from "./RegistrationHistoryBase"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/DataDisplay/RegistrationHistoryBase",
  component: RegistrationHistory,
  decorators: [
    (Story) => (
      <div style={{ width: "938px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {},
  argTypes: {},
} satisfies Meta<typeof RegistrationHistory>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    headerConfig: {
      code: "122.0",
      title: "Abertura",
    },
    data: [
      {
        id: "2",
        date: "04/03/2024 - 10:20",
        user: {
          name: "William Toder Santos",
          avatarUrl:
            "https://www.shareicon.net/data/512x512/2016/05/26/771188_man_512x512.png",
        },
        changedFields: [
          {
            id: "1",
            field: "descrição",
            from:
              "O cliente relatou um problema crítico de conectividade com a Internet em sua localidade. " +
              "Ele está enfrentando dificuldades consistentes ao acessar a internet em dispositivos conectados à rede da empresa.",
            to:
              "O cliente entrou em contato para relatar um problema crítico" +
              " relacionado à conectividade com a Internet em sua localidade." +
              "\n\nSegundo o relato do cliente, ele está enfrentando dificuldades consistentes ao " +
              "tentar acessar a internet em dispositivos conectados à rede da empresa.",
          },
        ],
      },
      {
        id: "1",
        date: "23/02/2024 - 11:50",
        user: {
          name: "William Toder Santos",
          avatarUrl:
            "https://www.shareicon.net/data/512x512/2016/05/26/771188_man_512x512.png",
        },
      },
    ],
  },
}
