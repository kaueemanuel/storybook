import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

export const NewRelease = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        transform="translate(-0.5, 0.5)"
        d="M4.75 13.25H12.3943L13.8943 11.75H4.75V13.25ZM4.75 9.25H10.25V7.75H4.75V9.25ZM2.5 5.5V15.5H10.1442L8.64425 17H1V4H20V7.14425H18.5V5.5H2.5Z"
      />
      <path
        transform="translate(0.1, 0.5)"
        d="M17.8884 14.4503H14V12.8884H17.8884V9H19.4503V12.8884H23.3388V14.4503H19.4503V18.3388H17.8884V14.4503Z"
      />
    </SvgIcon>
  )
}
