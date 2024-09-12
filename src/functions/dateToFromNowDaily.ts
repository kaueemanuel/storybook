import moment from "moment/moment"

/**
 * Converte data numérica para texto
 * @param {string} myDate data
 * @returns data formatada
 */
export const dateToFromNowDaily = (myDate) => {

  // obtém a data atual
  const fromNow = moment(myDate).fromNow()

  return moment(myDate).calendar(null, {
    lastWeek: `[${ fromNow }]`, // '[Últ.] dddd',
    lastDay: "[Ontem]",
    sameDay: "[Hoje]",
    nextDay: "[Amanhã]",
    nextWeek: `[${ fromNow }]`,
    sameElse() {
      return `[${ fromNow }]`
    }
  })
}
