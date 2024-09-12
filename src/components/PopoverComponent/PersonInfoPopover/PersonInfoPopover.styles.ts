import { styled, Box, Typography } from "@mui/material"

// ################################################
// Estilo do loading
// ################################################
export const LoadingBox = styled(Box)`
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// ################################################
// Container principal para a Popover
// ################################################
export const PopoverContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
// Estilo do item da pessoa
export const PersonItem = styled(Box)`
  display: flex;
  align-items: center;
`

// Estilo do ícone
export const IconBox = styled(Box)`
  display: flex;
  align-items: center;
`

// Estilo da descrição do texto
export const DescriptionText = styled(Typography)`
  font-size: 0.875rem;
  margin-left: 0.5rem;
  padding-left: 0%;
`
