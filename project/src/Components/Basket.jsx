import { BasketItem } from "./BasketItem"
export const Basket=({items,total,id,onUp,onDown,onRemove})=>{
    return <div>  

          <h3>Basket</h3>        
          <strong> TOTAL : {total}  AMD</strong>


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
                        items.map(elm=><BasketItem key={elm.id} {...elm}
                         onUp={onUp} onDown={onDown} onRemove={onRemove}  />
                            
                        )
                    }
                </tbody>
        </table>      

    </div>
}