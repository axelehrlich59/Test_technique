export const getTavCalculated = (number) => {
  if(!typeof number === "number" || number === undefined) return null
  const taux = 5.5
  const numberCalculated = number * (1 + taux / 100)
  const replaceDigits = numberCalculated.toFixed(2).toString().replace(".", ",")
  return replaceDigits
}