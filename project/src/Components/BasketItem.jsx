import { useContext } from "react"
import { UserContext } from "../context"
export const BasketItem = ({ title, price, id, count }) => {
    const { dispatch } = useContext(UserContext)
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{price * count}</td>
        <td>
            <button onClick={() => dispatch({ type: "UP", payload: id })}>+</button>
            <button onClick={() => dispatch({ type: "DOWN", payload: id })}>-</button>
            <button onClick={() => dispatch({ type: "DELETE", payload: id })}>x</button>
        </td>
    </tr>
}