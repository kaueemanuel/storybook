export const onlyIpv4Mask = (e) => {
  const charCode = e.charCode ? e.charCode : e.keyCode
  if (charCode !== 46 && charCode !== 8 && charCode !== 9) {
    if (charCode < 48 || charCode > 57) {
      e.preventDefault()
      return false
    }
  }
  e.persist()
  return true
}
