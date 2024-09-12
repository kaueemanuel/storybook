import styled from "@emotion/styled"

import { Popper } from "../../../components/Popper/Popper"

export const InfoPopperStyled = styled(Popper)({
  zIndex: 1200,
  "& .MuiPopper-container": {
    "& .MuiPaper-root": {
      width: "400px",
      maxHeight: "90vh",
      background: "linear-gradient(90deg, #FFF 30%, #edf3f9 100%)",
    },
    "& .box-popper": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      maxHeight: "calc(100vh - 150px)",
    },
  },
  '&[data-popper-placement*="bottom"]': {
    "& .MuiPopper-arrow::after": {
      background: "linear-gradient(45deg, transparent 40%, #edf3f9 60%)",
    },
  },
  '&[data-popper-placement*="top"]': {
    "& .MuiPopper-arrow::after": {
      background: "linear-gradient(45deg, #edf3f9 40%, transparent 60%)",
    },
  },
  '&[data-popper-placement*="right"]': {
    "& .MuiPopper-arrow::after": {
      background: "linear-gradient(-135deg, transparent 40%, #edf3f9 60%)",
    },
  },
  '&[data-popper-placement*="left"]': {
    "& .MuiPopper-arrow::after": {
      background: "linear-gradient(-135deg, #edf3f9 40%, transparent 60%)",
    },
  },
})
