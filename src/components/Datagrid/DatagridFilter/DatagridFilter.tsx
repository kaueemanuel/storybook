import { useRef } from "react"
import { useTranslation } from "react-i18next"

import {
  BoxProps,
  IconButton,
  Popover,
  PopoverOrigin,
  Typography,
} from "@mui/material"

import { Button } from "../../Button/Button"
import { Icon } from "../../Icons/Icon"
import {
  DatagridFilterContent,
  DatagridFilterFooter,
  DatagridFilterHeader,
  StyledBadge,
} from "./DatagridFilter.styles"

export interface DatagridFilterProps {
  filtersCount: number
  setFilters?: () => void
  resetFilters?: () => void
  children: React.ReactNode | string
  headerProps?: BoxProps
  footerProps?: BoxProps
  open: boolean
  toggleOpen: () => void
  transformOrigin?: PopoverOrigin
  anchorOrigin?: PopoverOrigin
  "data-testid"?: string
}

export const DatagridFilter: React.FC<DatagridFilterProps> = ({
  filtersCount,
  setFilters,
  resetFilters,
  children,
  headerProps = {},
  footerProps = {},
  open,
  toggleOpen,
  transformOrigin = { horizontal: "right", vertical: "top" },
  anchorOrigin = { horizontal: "right", vertical: "bottom" },
  "data-testid": dataTestid = "datagrid-toolbar",
}) => {
  const { t } = useTranslation()
  const ref = useRef(null)

  const handleFilter = () => {
    if (setFilters) {
      setFilters()
    }
  }

  return (
    <div style={{ position: "relative" }} data-testid={dataTestid}>
      <IconButton
        ref={ref}
        onClick={toggleOpen}
        id="filter-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <StyledBadge badgeContent={filtersCount || 0}>
          <Icon name="filter_alt" />
        </StyledBadge>
      </IconButton>
      <Popover
        anchorEl={ref?.current}
        id="basic-menu"
        open={open}
        onClose={toggleOpen}
        slotProps={{
          paper: {
            style: {
              maxHeight: "500px",
              overflowY: "hidden",
            },
          },
        }}
        transformOrigin={transformOrigin}
        anchorOrigin={anchorOrigin}
        style={{
          height: "100%",
        }}
      >
        <DatagridFilterHeader {...headerProps}>
          <Typography fontWeight={600} fontSize={"1.125rem"}>
            {t("datagridFilter.title")}
          </Typography>
        </DatagridFilterHeader>
        <DatagridFilterContent>{children}</DatagridFilterContent>
        <DatagridFilterFooter {...footerProps}>
          {resetFilters && (
            <Button onClick={resetFilters} variant="outlined">
              {t("datagridFilter.btn.clear")}
            </Button>
          )}
          {setFilters && (
            <Button onClick={handleFilter} variant="contained">
              {t("datagridFilter.btn.confirm")}
            </Button>
          )}
        </DatagridFilterFooter>
      </Popover>
    </div>
  )
}
