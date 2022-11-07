
import navStyle from './layoutNav.module.css';
const NavLayout = ({lChil,options}) => {
    return(
        <>
            <div className={`container mx-auto grid grid-cols-2 bg-gray-900  ${navStyle.contentNav}`}>
                <div className={`flex items-center
                text-5xl font-extrabold
                bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500
                `}>{lChil}</div>
                <div className={`flex items-center col-end-7 col-span-2 text-white`}>
                        {options}
                </div>
            </div>
        </>
    )
}

export default NavLayout;