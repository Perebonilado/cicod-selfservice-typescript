import ItemsContainerStyles from './ItemsContainerStyles.module.css'
import ItemsTable from '../ItemsTable'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'

const ItemsContainer:React.FC = () => {

    const {isItems, setIsItems} = React.useContext(AppContext) as AppContent

    const handleClick = ():void => {
        setIsItems(!isItems)
    }

    return (
        <section className={`${ItemsContainerStyles['container']}`}>
            
            <div onClick={handleClick} className={`${ItemsContainerStyles['headingBox']}`}>
                <h3>Items</h3>

                <div>
                {isItems ? <i className="far fa-chevron-up"></i> : <i className="far fa-chevron-down"></i>}
                </div>
            </div>

            <div>
                {isItems && <ItemsTable />}
            </div>

        </section>
    )
}

export default ItemsContainer