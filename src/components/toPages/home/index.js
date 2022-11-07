import Link from "next/link";
import NavLayout from "../../layout/Nav/NavLayout.js";
import {SlideDepartmentSection} from './sections/SlideDepartments.js'
import {SectionProducts} from './sections/SectionProducts.js';
import { createContext, useEffect, useReducer, useState } from "react";
import { getDepartmentService } from "../../../service/departmenstService.js";
import { getProducts } from "../../../service/productsService.js";
import ModalDefault from './modals/ModalDefault.js'
import {useModal} from '../../../hooks/useModal.js';
import {reducerProducts} from '../../../hooks/reducerProducts.js';
const sectionsContext = createContext({
  products : [],
  departments : []
})

const Home = () => {
  
    const modal = useModal();
    const [departments,setDepartments] = useState([]);
    const [products,setProducts] = useState([]);
    const openModal = () => modal.open(!modal.visible);
    useEffect(
      ()=>{
          modal.open(false);
      },[]
  );
    useEffect(
        function(){
            getDepartmentService().then(r => setDepartments(r.data));
        },[]
    )
    useEffect(
      function(){
          getProducts().then(r => dispatch({type : 'search',payload:r.data}));
      },0
  )
  const [p,dispatch] = useReducer(reducerProducts,products)
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
              <Link href={"/homePage"}>home</Link>
            </div>
          </>
        }
      />
        <div className="container mx-auto max-w-screen-2Xl">
            <SlideDepartmentSection departments={departments}/>
            <SectionProducts products={p}/>
        </div>
        <ModalDefault open={modal.visible} close={ openModal}/>
    </>
  );
};

export default Home;
