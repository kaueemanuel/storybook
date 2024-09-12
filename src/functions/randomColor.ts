// eslint-disable-file
/**
 * Gera cores (#hex) randomicamente
 * @returns `string` cor hexadecimal
 */
export function randomColor() {
   
  const hex = (Math.random()*0xFFFFFF<<0).toString(16)
  return `#${ hex }`
}
