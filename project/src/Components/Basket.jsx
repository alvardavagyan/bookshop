import { BasketItem } from "./BasketItem"
import { UserContext, setTotal } from "../context"
import { useContext } from "react"

export const Basket = () => {
    const { state: { basket } } = useContext(UserContext)
    const total = setTotal(basket)

    return <div>
        <h3>Basket</h3>
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    basket.map(elm => <BasketItem key={elm.id} {...elm} />)
                }
            </tbody>
            <h4>Total:{total}AMD</h4>
        </table>

    </div>
}