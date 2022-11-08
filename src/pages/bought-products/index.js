import { useEffect, useState } from "react"
import {boughtProductsService} from '../../service/boughtProductsService'
import SectionLayout from '../../components/layout/Section/SectionLayout.js'
import {CardAmount} from '../../components/card/CardAmount.js';
import {useModal} from '../../hooks/useModal.js'
import ModalDefault from '../../components/toPages/home/modals/ModalDefault.js'
import {getProducts} from '../../service/productsService.js'
const BoughtProducts = () => {
    const [infoModal ,setInfoModal] = useState({});
    const modal = useModal();
    useEffect(
        ()=>{
            modal.open(false);
        },[]
    );
    const modalInfo = () => modal.open(!modal.visible)
    const responseDataOnlyProduct = (data) => {
        if(data)
        {
            console.log(data)
          setInfoModal(data)
          modalInfo()
        }
        // openModal()
      }
      const getInfoProduct = (data) => {
        console.log(data)
        getProducts(data.productId).then(r => {
          responseDataOnlyProduct(r.data)
        })
      }
    
    const [boughts, setBoughts ] = useState([]);
    useEffect(
        function () {
            boughtProductsService().then(
                r => setBoughts(r.data)
            )
        },[]
    )
    return (
        <>
        <SectionLayout
        title="Todas las compras"
        children={<>
        {
            boughts.length > 0
            ? boughts.map(
                e => <CardAmount eventInfo={getInfoProduct} data={e} text={e.product.name} amount={`$ ${e.product.price}`}/>
            )
            : null
        }
        {
          infoModal
          ?<ModalDefault headerTitle={infoModal.name} 
          content={
            <>
            <div className="grid grid-cols-2">
              <div>Nombre : </div>
              <div>{infoModal.name}</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Descripcion : </div>
              <div>{infoModal.description}</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Precio : </div>
              <div>{infoModal.price}</div>
            </div>
            <div className="grid grid-cols-2">
              <div>disponibles : </div>
              <div>{infoModal.stack}</div>
            </div>
            <div className="grid grid-cols-2 mt-5">
              <div>Departamento : </div>
              <div>{infoModal?.department?.name}</div>
            </div>
            </>
          }
          footer={
            <>
            </>
          }
           open={modal.visible} close={ modalInfo}/>
          :null
        }
        </>}
        />
        </>
    )
}

export default BoughtProducts