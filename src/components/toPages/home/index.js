import Link from "next/link";
import NavLayout from "../../layout/Nav/NavLayout.js";
import {SlideDepartmentSection} from './sections/SlideDepartments.js'
import {SectionProducts} from './sections/SectionProducts.js';
import { useEffect, useState } from "react";
import { getDepartmentService } from "../../../service/departmenstService.js";
import { getProducts } from "../../../service/productsService.js";
const Home = () => {
  
    const [departments,setDepartments] = useState([]);
    const [products,setProducts] = useState([]);
    useEffect(
        function(){
            getDepartmentService().then(r => setDepartments(r.data));
        },[]
    )
    useEffect(
      function(){
          getProducts().then(r => setProducts(r.data));
      },[]
  )
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
            <SectionProducts products={products}/>
        </div>
    </>
  );
};

export default Home;
