import { Typography, Box } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"

import { IconButton } from "../IconButton/IconButton"
import { PopoverPersonInfo } from "./PersonInfoPopover/PersonInfoPopover"
import { PopoverComponent } from "./PopoverComponent"
import { PersonInfo } from "./types/PopoverTypes"

// Configuração do meta para o Storybook
const meta = {
  title: "Components/DataDisplay/Popover/PopoverComponent",
  component: PopoverComponent,
  tags: ["autodocs"],
  argTypes: {
    popoverContent: {
      control: false, // Desativando o controle para um componente React
      description:
        "Conteúdo exibido dentro do popover. Pode ser um texto ou um componente React.",
    },
    children: {
      control: false, // Desativando o controle aqui para evitar conflitos com componentes React
      description: "Elemento clicável que abrirá o popover.",
    },
    padding: {
      control: {
        type: "number",
        min: 0,
      },
      description: "Espaçamento interno do popover.",
    },
  },
} satisfies Meta<typeof PopoverComponent>

export default meta

type Story = StoryObj<typeof meta>

// Exemplo de história com um ícone clicável
export const WithIcon: Story = {
  args: {
    children: (
      <IconButton
        icon={"youtube_activity"}
        variant="contained"
        color="primary"
      />
    ),
    popoverContent: (
      <Box>
        <Typography>
          Este é o conteúdo do Popover com um ícone clicável!
        </Typography>
      </Box>
    ),
  },
}

// ##################################################
// Exemplo de história com um PersonInfoPopover
// ##################################################

const personInfos: PersonInfo = {
  crmFunction: "Gerente Financeiro",
  mail: "renato.aji@minhaempresa.com.br",
  phone: "(55) 99647-4785",
  cellPhone: "(55) 3220-1350",
}

// Story com um icone clicavel localizado a esquerda
export const ExemplePopoverLeft: Story = {
  args: {
    children: (
      <IconButton
        icon={"user_attributes"}
        variant="contained"
        color="primary"
      />
    ),
    popoverContent: (
      <PopoverPersonInfo personInfos={personInfos}></PopoverPersonInfo>
    ),
  },
}

// Story com um icone clicavel centralizado
export const ExemplePopoverCenter: Story = {
  args: {
    children: (
      <IconButton
        icon={"user_attributes"}
        variant="contained"
        color="primary"
      />
    ),
    popoverContent: (
      <PopoverPersonInfo personInfos={personInfos}></PopoverPersonInfo>
    ),
  },
  render: (args) => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <PopoverComponent {...args} />
    </Box>
  ),
}

// Story com um icone clicavel a direita
export const ExemplePopoverRigth: Story = {
  args: {
    children: (
      <IconButton
        icon={"user_attributes"}
        variant="contained"
        color="primary"
      />
    ),
    popoverContent: (
      <PopoverPersonInfo personInfos={personInfos}></PopoverPersonInfo>
    ),
  },
  render: (args) => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      sx={{ width: "100%" }}
    >
      <PopoverComponent {...args} />
    </Box>
  ),
}

export const ExemplePersonInfo: Story = {
  args: {
    children: (
      <IconButton
        icon={"user_attributes"}
        variant="contained"
        color="primary"
      />
    ),
    popoverContent: (
      <PopoverPersonInfo personInfos={personInfos}></PopoverPersonInfo>
    ),
  },
}
