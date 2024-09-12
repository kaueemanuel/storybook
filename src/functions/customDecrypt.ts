import size from "lodash/size"
import split from "lodash/split"
import upperCase from "lodash/upperCase"
import md5 from "md5"

export const customDecrypt = (input, salt, secret) => {
  const data = atob(input)
  const dataSplit = split(data, ":")
  if (size(dataSplit) !== 3) {
    return null
  }

  const saltSent = atob(dataSplit[0])
  const decryptedText = atob(atob(dataSplit[1]))
  const secretSent = atob(dataSplit[2])

  if (upperCase(saltSent) === upperCase(md5(salt))
    && upperCase(secretSent) === upperCase(md5(secret))) {
    return decryptedText
  }

  return null
}
