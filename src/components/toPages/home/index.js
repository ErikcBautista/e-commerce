import Link from "next/link";
import NavLayout from "../../layout/Nav/NavLayout.js";
import {SlideDepartmentSection} from './sections/SlideDepartments.js'
import {SectionProducts} from './sections/SectionProducts.js';
import { createContext, useEffect, useReducer, useState } from "react";
import { getDepartmentService } from "../../../service/departmenstService.js";
// import { getProducts } from "../../../service/productsService.js";
import ModalDefault from './modals/ModalDefault.js'
import {useModal} from '../../../hooks/useModal.js';
import {reducerProducts} from '../../../hooks/reducerProducts.js';
import {CarShop} from '../../ShopingCart/CarShop.js';
import {reducerShopProducts, shoppingCartInitial} from '../../../hooks/reducerProductsCar.js';
import SectionLayout from "../../layout/Section/SectionLayout.js";
import { CardAmount } from "../../card/CardAmount.js";
import { getProducts } from "../../../service/productsService.js";
import { boughtProductsService } from '../../../service/boughtProductsService.js'

const sectionsContext = createContext({
  products : [],
  departments : []
})

const newProduct = {
  name : "",
  description: "",
  price:"",
  stack: "",
  departmentId : ""
}

const Home = () => {
  const modal = useModal();
  const modalNewProduct = useModal();
  const [infoModal ,setInfoModal] = useState({});
    useEffect(
        ()=>{
            modal.open(false);
        },[]
    );
    useEffect(
      ()=>{
          modalNewProduct.open(false);
      },[]
  );
  const [stateProducts , disProduct] = useReducer(reducerShopProducts,shoppingCartInitial)
    const {products} = stateProducts;
  const generateBought = () => {
    if(products.length > 0)
    {
      products.forEach(
        e => {
          boughtProductsService(null,'POST',{productId:e.idProduct}).then(
            r => console.log(r)
          )
        }
      );
    }
  }
    const openModal = () => modal.open(!modal.visible);
    const openModalNewProduct = () => modalNewProduct.open(!modalNewProduct.visible)
  
    // const modal = useModal();
    const [departments,setDepartments] = useState([]);
    const [allProducts , setAllProducts] = useState([]);
    const [sendNewProduct , setSendNewProduct] = useState(newProduct)
    const [optionDepartmentSelected, setOptionDepartmentSelected] = useState('')

    
    const addProduct = (e) => {
      disProduct({type:'add',payload:e})
    };
    const delProduct = () => {};
    const clearCart = () => {};

    const deleteProductService = (id) => {
      getProducts(id,'DELETE').then(
        r => getProducts().then(r => setAllProducts(r.data))
      ).catch(
        e => new Error(e)
      )
    }

    const handleFormNewProduct = (e) => {
      e.preventDefault();
      getProducts(null,'POST',sendNewProduct).then(
        r => {
          getProducts().then(r => setAllProducts(r.data));
          openModalNewProduct()
        }
      ).catch(
        e => console.log(e)
      )
    }
    useEffect(
        function(){
            getProducts().then(r => setAllProducts(r.data));
        },[]
    )
    useEffect(
      function(){
          getDepartmentService().then(r => setDepartments(r.data));
      },[]
  )
  const responseDataOnlyProduct = (data) => {
    if(data)
    {
      setInfoModal(data)
      openModal()
    }
    // openModal()
  }
  const getInfoProduct = (data) => {
    getProducts(data.idProduct).then(r => {
      responseDataOnlyProduct(r.data)
    })
  }
  const handleSelect = (e) => {
    let index = e.target.selectedIndex
    if(index != "Seleccionar"){
      setSendNewProduct({...sendNewProduct,departmentId: e.target.options[index].value})
    }
  }
  return (
    <>
      <NavLayout
        lChil={"E-Commerce (BH)"}
        options={
          <>
            <div className={`px-8`}>
              <Link href={"/"}>Home</Link>
            </div>
            <div className={`px-8`}>
              <Link href={"/bought-products"}>Compras realizadas</Link>
            </div>
          </>
        }
      />
      
        <div className="container mx-auto max-w-screen-2Xl  relative">
            <CarShop generateBoughtEvent={generateBought} shopProduct={products} />
            <SlideDepartmentSection departments={departments}/>
            <div className="flex justify-center">
              <button onClick={openModalNewProduct } className="bg-blue-700 text-white p-4 rounded-lg w-96">Nuevo producto</button>
            </div>
            <SectionProducts eventInfo={getInfoProduct} eventAddProductCar={addProduct}
            products={allProducts}
            />
        </div>
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
            <div className="flex justify-center justify-between ">
            <button onClick={() => {deleteProductService(infoModal.idProduct); openModal()} } className={`rounded-lg bg-red-700 w-20 text-white`}>Eliminar</button>
            <button onClick={() => {addProduct(infoModal); openModal()} } className={`rounded-lg bg-blue-700 w-20 text-white`}>agregar</button>
            </div>
            </>
          }
           open={modal.visible} close={ openModal}/>
          :null
        }
        <ModalDefault 
        headerTitle={"Nuevo producto"}
        content={
          <>
          <form onSubmit={(e)=>handleFormNewProduct(e)} className="bg-slate-300 p-5">
            <div >
              <div>
                <label>nombre</label>
              </div>
              <div>
              <input onChange={(e) => setSendNewProduct({...sendNewProduct,name:e.target.value})} id="name" name="name" type="text"/>
              </div>
            </div>
            <div >
              <div>
                <label for="price">Price</label>
              </div>
              <div>
              <input onChange={(e) => setSendNewProduct({...sendNewProduct,price:e.target.value})} id="price" name="price" type="number"/>
              </div>
            </div>
            <div >
              <div>
                <label>Disponible</label>
              </div>
              <div>
              <input onChange={(e) => setSendNewProduct({...sendNewProduct,stack:e.target.value})} id="name" name="name" type="number"/>
              </div>
            </div>
            <div >
              <div>
                <label>Departamento</label>
              </div>
              <div>
                <select onChange={e => handleSelect(e)}>
                  <option>Seleccionar</option>
                  {
                    departments.map(
                      el => <option  key={el.id} value={el.id}>{el.name}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div >
              <div>
                <label>Descripcion</label>
              </div>
              <div>
              <textarea id="name" name="name" onChange={(e) => setSendNewProduct({...sendNewProduct,description:e.target.value})} />
              </div>
            </div>
            <div className="flex justify-between p-5">
              <button onClick={openModalNewProduct} type="submit" className="rounded-lg bg-neutral-400 py-1 px-4">Cancelar</button>
              <button className="bg-blue-600 py-1 px-4 text-white rounded-lg" type="submit">Guardar</button>
            </div>
          </form>
          </>
        }
         open={modalNewProduct.visible} close={openModalNewProduct}/>
    </>
  );
};

export default Home;
