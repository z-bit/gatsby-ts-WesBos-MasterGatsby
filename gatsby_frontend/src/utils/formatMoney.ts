const formatter = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
})

export const formatMoney = (cents) => formatter.format(cents/100)