export const formatFileSizeDescription = (bytes, si = true) => {
  const thresh = si ? 1000 : 1024
  if (Math.abs(bytes) < thresh) {
    return `${bytes}b`
  }
  const units = si
    ? ["kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"]
    : ["kib", "mib", "gib", "tib", "pib", "eib", "zib", "yib"]

  let u = -1
  do {
    bytes /= thresh

    ++u
  } while (Math.abs(bytes) >= thresh && u < units.length - 1)

  return `${bytes.toFixed(1)}${units[u]}`
}
