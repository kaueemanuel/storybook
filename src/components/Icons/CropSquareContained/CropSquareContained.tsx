import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

export const CropSquareContained = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        transform="translate(3, 3)"
        d="M1.65611 18C1.2 18 0.809958 17.838 0.485975 17.514C0.161991 17.19 0 16.8 0 16.3439V1.65611C0 1.2 0.161991 0.809958 0.485975 0.485975C0.809958 0.161992 1.2 0 1.65611 0H16.3439C16.8 0 17.19 0.161992 17.514 0.485975C17.838 0.809958 18 1.2 18 1.65611V16.3439C18 16.8 17.838 17.19 17.514 17.514C17.19 17.838 16.8 18 16.3439 18H1.65611Z"
      />
    </SvgIcon>
  )
}
