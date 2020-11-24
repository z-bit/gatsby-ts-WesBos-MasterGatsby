import calculatePizzaPrice from "./calulatePizzaPrice"
import formatMoney from './formatMoney'

export default function calculateOrderTotal(order, pizzas) {

    const total = order.reduce((acc, item) => {
        const pizza = pizzas.find(p => p.id === item.id)
        return acc + calculatePizzaPrice(pizza.price, item.size, false)
    }, 0)
    return formatMoney(total)
}