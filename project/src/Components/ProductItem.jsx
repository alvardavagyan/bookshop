import { useContext } from "react"
import { UserContext } from "../context"
export const ProductItem = ({ title, id, price, photo }) => {
    const { dispatch } = useContext(UserContext)
    return <div>
        <img src={photo} />
        <p>{title}</p>
        <p>{price}AMD</p>
        <button onClick={() => dispatch({ type: "MOVE", payload: id })}>move</button>
    </div>
}