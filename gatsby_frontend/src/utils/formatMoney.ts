const formatter = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
})

export default function formatMoney(cents: number) {
    return formatter.format(cents/100)
} 