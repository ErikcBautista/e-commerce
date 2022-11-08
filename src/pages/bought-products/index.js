import { useEffect, useState } from "react"
import {boughtProductsService} from '../../service/boughtProductsService'
import SectionLayout from '../../components/layout/Section/SectionLayout.js'
import {CardAmount} from '../../components/card/CardAmount.js'
const BoughtProducts = () => {
    const [boughts, setBoughts ] = useState([]);
    useEffect(
        function () {
            boughtProductsService().then(
                r => setBoughts(r.data)
            )
        },[]
    )
    const eventInfo = () => console.log('info');
    const eventAddProductCar = () => console.log('add')
    return (
        <>
        <SectionLayout
        title="Todas las compras"
        children={<>
        {
            boughts.length > 0
            ? boughts.map(
                e => <CardAmount eventInfo={eventInfo} data={e.product} text={e.product.name} amount={`$ ${e.product.price}`}/>
            )
            : null
        }
        </>}
        />
        </>
    )
}

export default BoughtProducts