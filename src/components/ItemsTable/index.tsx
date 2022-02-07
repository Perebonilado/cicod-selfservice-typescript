import ItemsTableStyles from './ItemsTableStyles.module.css'

const ItemsTable:React.FC = () => {
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

                <tr>
                    <td>
                    Baileys Delight
                    </td>

                    <td>
                    Ikeja
                    </td>

                    <td>
                    #7500
                    </td>

                    <td>
                        #52,500
                    </td>

                    <td>
                        5
                    </td>
                </tr>
                <tr>
                    <td>
                    Baileys Delight
                    </td>

                    <td>
                    Ikeja
                    </td>

                    <td>
                    #7500
                    </td>

                    <td>
                        #52,500
                    </td>

                    <td>
                        5
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemsTable