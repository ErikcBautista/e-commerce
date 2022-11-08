
import { useEffect, useState } from 'react';
import {getProducts} from '../../../../service/productsService.js'
import {CardAmount} from '../../../card/CardAmount.js'
import SectionLayout from '../../../layout/Section/SectionLayout.js'
const eventDefault = () => console.log((''))
const SectionProducts = ({products=[],eventAddProductCar,eventInfo}) => {
    return(
        <>
        {
            products.length > 0
            ? <SectionLayout 
            title='Todos los productos'
            children={
                products.map(
                    e => {
                        return (
                            <CardAmount eventInfo={eventInfo} eventAdd={ eventAddProductCar} data={e} text={e.name} amount={`$ ${e.price}`}/>
                        )
                    }
                )
            }
            />
            : null
        }
        </>
    )
}

export {SectionProducts}