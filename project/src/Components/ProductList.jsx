import { ProductItem } from "./ProductItem"
import { useContext } from "react"
import { UserContext } from "../context"

export const ProductList = () => {
    const { state: { books } } = useContext(UserContext)
    return <div className="list">
        {
            books.map(elm => <ProductItem key={elm.id} {...elm} />)
        }
    </div>
}