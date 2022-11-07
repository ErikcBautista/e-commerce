
import { useEffect, useState } from 'react';
import {getProducts} from '../../../../service/productsService.js'
import {CardAmount} from '../../../card/CardAmount.js'
import SectionLayout from '../../../layout/Section/SectionLayout.js'
const SectionProducts = ({products=[]}) => {
    
    // const [products , setProducts] = useState([]);
    // useEffect(
    //     function() {
    //         getProducts().then(r => setProducts(r.data))
    //     },[]
    // )
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
                            <CardAmount text={e.name} amount={`$ ${e.price}`}/>
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