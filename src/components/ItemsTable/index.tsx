import ItemsTableStyles from './ItemsTableStyles.module.css'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'


const ItemsTable:React.FC = () => {
    
    const {items} = React.useContext(AppContext) as AppContent


    return (
        <div className={`${ItemsTableStyles['container']}`}>
            <table>
                    <thead>
                    <tr>

                    <th>
                        Product
                    </th>

                    <th>
                        Location
                    </th>

                    <th>
                        Qty
                    </th>

                    <th>
                        Unit Price
                    </th>

                    <th>
                        Amount
                    </th>
                    </tr>
                    </thead>
                
                <tbody>
                
                {items.map((item)=>{
                    const { product, merchantLocation, id, qty, amount, unitPrice } = item

                    return (
                        <tr key={id}>
                    <td>
                    {product}
                    </td>

                    <td>
                    {merchantLocation}
                    </td>

                    <td>
                    {qty}
                    </td>

                    <td>
                    &#x20A6; {unitPrice}
                    </td>

                    <td>
                    &#x20A6; {amount}
                    </td>
                </tr>
                    )
                })}

                </tbody>
            </table>
        </div>
    )
}

export default ItemsTable