export const bytesToMegabytes = (bytes: number): number => {
  const megabytes = bytes / (1024 * 1024)
  return megabytes
}
