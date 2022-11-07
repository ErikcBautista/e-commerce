import Link from "next/link";
import NavLayout from "../../layout/Nav/NavLayout.js";
import {SlideDepartmentSection} from './sections/SlideDepartments.js'
const Home = () => {
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
            <SlideDepartmentSection/>
        </div>
    </>
  );
};

export default Home;
