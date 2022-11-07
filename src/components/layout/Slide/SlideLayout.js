import SlideLayoutStyle from './SlideLayout.module.css'
const SlideLayout = ({title='',children}) => {
    return (
        <>
        <div className={`font-mono text-2xl bg-gray-600 text-white px-10`}>{title}</div>
        <div className={`
        text-white
        flex flex-nowrap 
        justify-center
        px-10 py-5
        ${SlideLayoutStyle.content} `}>
            {children}
        </div>
        </>
    )
}

export {SlideLayout}