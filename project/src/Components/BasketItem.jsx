export const BasketItem=({title,price,id,count,onUp,onDown,onRemove})=>{
    return <>   
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td> {count}</td>
            <td>{price*count}</td>
            <td>
                <button onClick={()=>onUp(id)}>+</button>
                <button onClick={()=>onDown(id)}>-</button>
                <button onClick={()=>onRemove(id)}>x</button>
            </td>
        </tr>
        </>
}