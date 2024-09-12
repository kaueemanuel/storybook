export const getPathInfo = (
  pathname?: string,
): {
  segment: string
  module: string
  routine: string
} | null => {
  const pathParts = (pathname ?? window.location.pathname)
    .replace("/ui", "")
    .split("/")
    .filter((p) => p !== "")

  if (!pathParts || pathParts.length <= 0) {
    return null
  }

  return {
    segment: pathParts[0],
    module: pathParts.length > 1 ? pathParts[1] : "",
    routine: pathParts.length > 2 ? pathParts[2] : "",
  }
}
