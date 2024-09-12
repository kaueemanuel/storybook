import styled from "@emotion/styled"

import { theme } from "../../../themes"

export const Container = styled.div`
  position: relative;
`

export const PopperContainer = styled.div`
  .react-datepicker {
    background-color: ${theme.palette.background.default};
    font-family: "Red Hat Display", "Roboto", "Helvetica", "Arial", sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 10px;

    .react-datepicker__navigation {
      top: 18px;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      :hover {
        background-color: #f0f0f0;
      }
    }
    .react-datepicker__navigation--previous {
      left: 10px;
    }
    .react-datepicker__navigation--next {
      right: 10px;
    }

    .react-datepicker__navigation-icon--previous {
      right: 1px;
    }
    .react-datepicker__navigation-icon--next {
      left: 1px;
    }

    .react-datepicker__navigation-icon {
      ::before {
        border-color: ${theme.palette.text.primary};
        border-width: 2px 2px 0 0;
      }
    }

    .react-datepicker__header {
      background: none;
      border: none;
      color: ${theme.palette.text.primary};

      .react-datepicker__current-month {
        font-size: 1rem;
        color: ${theme.palette.text.primary};
        padding: 6px 0 10px 0px;
      }

      .react-datepicker__day-names {
        .react-datepicker__day-name {
          color: ${theme.palette.text.primary};
          width: 36px;
          margin: 0.166rem;
        }
      }
      .react-datepicker__week {
        div {
          color: ${theme.palette.text.primary};
        }
      }
    }
    .react-datepicker__day {
      padding-top: 4px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: ${theme.palette.text.primary};
      :hover {
        border-radius: 50%;
      }
    }

    .react-datepicker__day--keyboard-selected {
      background-color: transparent;
      color: ${theme.palette.text.primary};
    }
    .react-datepicker__day--in-selecting-range {
      color: #fff;
    }

    .react-datepicker__day--today {
      background-color: transparent;
      color: ${theme.palette.text.primary};
      border: 1px solid ${theme.palette.text.primary};
    }

    .react-datepicker__day--in-range {
      background-color: ${theme.palette.primary.light};
      color: #fff;
    }
    .react-datepicker__day--range-start {
      background-color: ${theme.palette.primary.main};
      color: #fff;
    }
    .react-datepicker__day--range-end {
      background-color: ${theme.palette.primary.main};
      color: #fff;
    }

    .react-datepicker__day--in-selecting-range {
      background-color: ${theme.palette.primary.light};
    }
    .react-datepicker__day--selecting-range-start {
      background-color: ${theme.palette.primary.main};
      color: #fff;
    }
    .react-datepicker__day--selecting-range-end {
      background-color: ${theme.palette.primary.main};
      color: #fff;
    }
  }
`
