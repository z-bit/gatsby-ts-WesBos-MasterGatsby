import calculatePizzaPrice from "./calulatePizzaPrice"

export default function attachPizzasToEmail(order, pizzas) {
    return order.map(item => {
        const pizza = pizzas.find(pizza => pizza.id === item.id)

        return {
            ...item,
            name: pizza.name,
            thumbnail: pizza.image.asset.fluid.src,
            price: calculatePizzaPrice(pizza.price, item.size, true)
            
        }
    })
}