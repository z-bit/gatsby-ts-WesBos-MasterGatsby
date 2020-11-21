import { formatMoney } from './formatMoney'
export type Size = 'S' | 'M' | 'L'

const sizePrice = {
    S: 0.75,
    M: 1.00,
    L: 1.25,
}
export const calculatePizzaPrice = 
    (cents: number, size: Size) => formatMoney(cents * sizePrice[size]) 
