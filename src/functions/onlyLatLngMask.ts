export const onlyLatLngMask = (e) => {
  const charCode = e.charCode ? e.charCode : e.keyCode
  if (charCode !== 8 && charCode !== 9) {
    if (charCode === 47 || charCode < 45 || charCode > 57) {
      e.preventDefault()
      return false
    }
  }
  e.persist()
  return true
}