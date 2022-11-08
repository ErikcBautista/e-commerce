
const CarShopLayout = ({children}) => {
    return (
        <>
        <div className={`sticky top-0 right-0 w-60 bg-white  rounded-lg `}>
            {children}
        </div>
        </>
    )
}

export default CarShopLayout;