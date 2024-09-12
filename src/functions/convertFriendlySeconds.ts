import flow from "lodash/fp/flow"
import joinFP from "lodash/fp/join"
import mapFP from "lodash/fp/map"
import isNumber from "lodash/isNumber"
import padStart from "lodash/padStart"

/**
 * Convert seconds horas em um formato amigável.
 *
 * @param {number} duration - Segundos que serão convertidos
 * @param {boolean} spaceBetween - Espaçamento entre hora, minuto e segundo
 * @param {boolean} withSeconds - Mostrar segundos?
 * @return {string} 0h0min
 *
 * @example
 *
 * convertFriendlySeconds(3600)
 */
function convertFriendlySeconds(
  duration,
  spaceBetween = false,
  withSeconds = false
) {
  if (!isNumber(duration) || duration <= 0) {
    return spaceBetween ? "0 h" : "0h"
  }

  // const days = Math.floor(duration / (3600 * 24))
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = Math.floor((((duration % 3600) / 60) * 60) % 60)

  // const daysDisplay = days > 0 ? `${ days }d` : ''
  const hoursDisplay = hours > 0 ? `${ hours }${ spaceBetween ? " h " : "h" }` : ""
  let minutesDisplay = `${ minutes }${ spaceBetween ? " min " : "min" }`
  let secondsDisplay = `${ seconds }${ spaceBetween ? " s " : "s" }`
  if (hours > 0 && minutes <= 0) {
    minutesDisplay = ""
  }
  if (minutes > 0 && seconds <= 0) {
    secondsDisplay = ""
  }

  return `${ hoursDisplay }${ minutesDisplay }${ withSeconds ? secondsDisplay : "" }`
}

/**
 * Converte seconds para horas.
 *
 * @param {number} duration - Segundos que serão convertidos
 * @return {string} 00:00:00
 *
 * @example
 *
 * convertSecondsToHours(3600)
 */
function convertSecondsToHours(duration) {
  if (!isNumber(duration) || duration <= 0) {
    return "00:00:00"
  }

  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const timeDisplay = flow(
    mapFP((unit: any) => padStart(unit, 2, "0")),
    joinFP(":")
  )([hours, minutes, seconds])

  return timeDisplay
}

/**
 * Converte minutos para horas.
 *
 * @param {number} duration - Minutos que serão convertidos
 * @return {string} 00:00:00
 *
 * @example
 *
 * convertMinutesToHours(60)
 */
function convertMinutesToHours(duration) {
  if (!isNumber(duration) || duration <= 0) {
    return "00:00:00"
  }

  const hours = Math.floor(duration / 60)
  const minutes = Math.floor(duration % 60)

  const timeDisplay = flow(
    mapFP((unit: any) => padStart(unit, 2, "0")),
    joinFP(":")
  )([hours, minutes, 0])

  return timeDisplay
}

export {
  convertFriendlySeconds,
  convertSecondsToHours,
  convertMinutesToHours
}
