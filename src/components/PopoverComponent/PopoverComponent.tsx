import React, { useState, useRef, useEffect, cloneElement } from "react"

import { Popover, Box } from "@mui/material"

import { popoverPaperStyles } from "./PopoverComponent.styles"

export interface PopoverComponentProps {
  children: JSX.Element
  popoverContent: JSX.Element | null
  padding?: number
}

export const PopoverComponent: React.FC<PopoverComponentProps> = ({
  children,
  popoverContent,
  padding,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [anchorPosition, setAnchorPosition] = useState<"top" | "bottom">("top")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false) // Controle do estado de abertura do Popover
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const [positionCalculate, setpositionCalculate] = useState(false)

  const open = Boolean(anchorEl) && isPopoverOpen
  const id = open ? "customized-popover" : undefined
  const paddingValue = padding || 2

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsPopoverOpen(true) // Abrir o popover ao clicar
  }

  const handleClose = () => {
    setAnchorEl(null)
    setIsPopoverOpen(false) // Fechar o popover
  }

  const calculatePosition = () => {
    if (anchorEl && popoverRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect()
      const popoverHeight =
        popoverRef.current.offsetHeight + anchorRect.height + 24
      const windowHeight = window.innerHeight

      const spaceAbove = anchorRect.top
      const spaceBelow = windowHeight - anchorRect.bottom

      if (spaceAbove >= popoverHeight) {
        setAnchorPosition("top")
      } else if (spaceBelow >= popoverHeight) {
        setAnchorPosition("bottom")
      } else {
        setAnchorPosition(spaceAbove > spaceBelow ? "top" : "bottom")
      }
      handleContentLoaded()
      setpositionCalculate(true)
    }
  }

  useEffect(() => {
    if (anchorEl && popoverRef.current) {
      calculatePosition()
    }
    const timer = setTimeout(calculatePosition, 0)
    return () => clearTimeout(timer) // Limpa o timer quando o componente desmonta ou a referência muda
  }, [anchorEl, popoverRef.current])

  // Forçar fechamento e reabertura do Popover após o conteúdo ser carregado
  const handleContentLoaded = () => {
    setIsPopoverOpen(false) // Fechar o popover temporariamente
    setTimeout(() => {
      setIsPopoverOpen(true) // Reabrir o popover para forçar o recálculo
    }, 10)
  }

  return (
    <div>
      {cloneElement(children as React.ReactElement, {
        onClick: handleClick, // Adicionando o evento de clique ao elemento filho
      })}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: anchorPosition === "top" ? "top" : "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: anchorPosition === "top" ? "bottom" : "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              ...popoverPaperStyles,
              padding: paddingValue,
              margin: anchorPosition === "bottom" ? "4px" : "-4px",
            },
          },
        }}
      >
        <Box
          ref={popoverRef}
          sx={{
            visibility: positionCalculate ? "visible" : "hidden", // Mostra apenas após o cálculo
          }}
        >
          {popoverContent &&
            cloneElement(popoverContent as React.ReactElement, {
              onContentLoaded: handleContentLoaded, // Callback após carregar o conteúdo
            })}
        </Box>
      </Popover>
    </div>
  )
}
