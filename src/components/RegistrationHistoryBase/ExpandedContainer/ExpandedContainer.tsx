import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { Box, Divider, Typography } from "@mui/material"
import { GridRowId } from "@mui/x-data-grid"

import { theme } from "../../../themes"
import { Datagrid } from "../../Datagrid/Datagrid"
import { IconButton } from "../../IconButton/IconButton"
import { Icon } from "../../Icons/Icon"
import { DataRow } from "../RegistrationHistoryBase.types"
import { BoxStyled } from "./ExpandedContainer.styles"

interface GridExpandRowContentProps {
  children: any
}

const GridExpandRowContent: React.FC<GridExpandRowContentProps> = ({
  children,
}) => {
  const expandedRowRef = useRef<any>(null)

  useEffect(() => {
    if (expandedRowRef.current) {
      setTimeout(() => {
        expandedRowRef.current.classList.add("opened")
      }, 10)
    }

    return () => {
      expandedRowRef?.current?.classList.remove("opened")
    }
  }, [expandedRowRef.current])

  return (
    <BoxStyled
      padding={2}
      width="100%"
      ref={expandedRowRef}
      className="MuiDataGrid-row--expanded-content"
    >
      {children}
    </BoxStyled>
  )
}

export interface ExpandedContainerProps {
  header?: {
    code: string
    title: string
  }
  data?: DataRow
  selectedRowsIds?: GridRowId[]
  onRestoreClick?: (data: Array<{ field: string; id: string | number }>) => void
  onSelectionChanged?: (selectedRowsIds: GridRowId[]) => void
}

const ExpandedContainer = ({
  data,
  header,
  onRestoreClick = () => {},
}: ExpandedContainerProps) => {
  const { t } = useTranslation()

  const [selectedRowFieldsIds, setSelectedRowFieldsIds] = useState<GridRowId[]>(
    [],
  )

  return (
    <GridExpandRowContent>
      <Box display="flex" columnGap={2}>
        {(header?.code || header?.title) && (
          <Typography variant="body2" color={theme.palette.text.primary}>
            {[header?.code, header?.title].join(" - ")}
          </Typography>
        )}
      </Box>
      {(selectedRowFieldsIds?.length ?? 0) > 0 && (
        <>
          <Box marginTop={3} display="flex" columnGap={3} alignItems="center">
            <Typography color={theme.palette.text.primary}>
              {selectedRowFieldsIds?.length} {t("label_selected")}
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton
              icon="settings_backup_restore"
              tooltip={t("tooltip_restore")}
              onClick={() =>
                onRestoreClick(
                  (data?.changedFields ?? [])
                    .filter((f) => selectedRowFieldsIds?.includes(f.id))
                    .map((f) => ({
                      id: f.id,
                      field: f.field,
                    })),
                )
              }
            />
          </Box>
          <Typography
            variant="body2"
            marginTop={2}
            color={theme.palette.text.primary}
          >
            {t("registrationHistory_expanded_info")}
          </Typography>
        </>
      )}
      <Box marginTop={2}>
        <Datagrid
          mode="client"
          onRowSelectionModelChange={(model) => {
            setSelectedRowFieldsIds(model.map((x: any) => x["id"]))
          }}
          rowSelectionModel={selectedRowFieldsIds}
          rows={data?.changedFields ?? []}
          getRowHeight={() => "auto"}
          hideFooter
          columns={[
            {
              field: "field",
              headerName: t("registrationHistory_datagrid_column_field"),
              sortable: true,
              width: 250,
              renderCell: (params) => (
                <Typography variant="body2" noWrap>
                  {params.row.field}
                </Typography>
              ),
            },
            {
              field: "from",
              headerName: t("registrationHistory_datagrid_column_from"),
              sortable: false,
              renderCell: (params) => (
                <Typography variant="body2" padding={1} whiteSpace="normal">
                  {params.row.from}
                </Typography>
              ),
            },
            {
              field: "_",
              headerName: "",
              sortable: false,
              width: 50,
              renderCell: () => <Icon name="arrow_right_alt" />,
            },
            {
              field: "to",
              headerName: t("registrationHistory_datagrid_column_to"),
              sortable: false,
              renderCell: (params) => (
                <Typography variant="body2" padding={1} whiteSpace="normal">
                  {params.row.to}
                </Typography>
              ),
            },
          ]}
          checkboxSelection
        />
      </Box>
    </GridExpandRowContent>
  )
}

export default ExpandedContainer
