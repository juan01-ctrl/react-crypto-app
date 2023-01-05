type paramsType = {
    currency?: string | undefined
    decimals?: number
    value: number
}
export const formatNumber = ({ value, currency = 'USD', decimals = 12 }: paramsType) => {
  return value.toLocaleString('en-US', { style: 'currency', currency, maximumFractionDigits: decimals })
}