import Image from "next/image";
import CarShopLayout from "../layout/CarShop/CarShopLayout"
import carShopping from './images/shopping-cart.png';
import CarShopStyle from './CarShop.module.css'
import { useState } from "react";
const CarShop = ({shopProduct=[]}) => {
    let total = 0;
    shopProduct.forEach(
        e => {
            total = total + e.price
        }
    )
    const [state,setState] = useState(false);
    return (
        <>
        <CarShopLayout children={
            <div  className={`${CarShopStyle.header} absolute px-4 pb-4 bg-white `} required>
                <div onClick={()=>setState(!state)}  className={`flex justify-between  `}>
                    <Image src={carShopping} alt="" width={30}/> {shopProduct.length}
                </div>
                <div className={`${state ? CarShopStyle.content : CarShopStyle.noContent }`}>
                {
                    shopProduct.length > 0
                    ? shopProduct.map(
                        e => <div className="py-1 px-2 flex justify-between">
                        {e.name} ${e.price}<button className="rounded-lg w-20 bg-neutral-400">info</button>
                    </div>
                    )
                    :null
                }
                {
                    shopProduct.length > 0 
                    ? <div>
                        <div>total: ${total}</div>
                        <button className="rounded-lg bg-blue-700 text-white">comprar</button>
                    </div>
                    :null
                }
                </div>
            </div>
        }/>
        </>
    )
}

export {CarShop}