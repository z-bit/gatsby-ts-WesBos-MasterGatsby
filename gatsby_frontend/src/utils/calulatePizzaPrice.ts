import formatMoney from './formatMoney'

export type Size = 'S' | 'M' | 'L'

const sizePrice = {
    S: 0.75,
    M: 1.00,
    L: 1.25,
}

export default function calculatePizzaPrice(cents: number, size: Size, inCurrency: boolean) {
    const price = cents * sizePrice[size] 
    
    if(inCurrency) {
        return formatMoney(price)
    }

    return price
} 