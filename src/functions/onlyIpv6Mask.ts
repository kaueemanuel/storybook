export const onlyIpv6Mask = (e) => {
  const charCode = e.charCode ? e.charCode : e.keyCode
  if (charCode !== 58 && charCode !== 8 && charCode !== 9) {
    if ((charCode >= 33 && charCode <= 64) ||
      (charCode >= 91 && charCode <= 93) ||
      (charCode >= 123 && charCode <= 159) ||
      (charCode >= 162 && charCode <= 191)) {
      if (charCode < 48 || charCode > 57) {
        e.preventDefault()
        return false
      }
    }
  }
  e.persist()
  return true
}
