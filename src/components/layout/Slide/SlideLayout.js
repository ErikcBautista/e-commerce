import SlideLayoutStyle from './SlideLayout.module.css'
const SlideLayout = ({children}) => {
    return (
        <>
        <div className={`
        bg-gray-500
        flex flex-nowrap 
        rounded-lg 
        px-10 py-5
        ${SlideLayoutStyle.content} `}>
            {children}
        </div>
        </>
    )
}

export {SlideLayout}