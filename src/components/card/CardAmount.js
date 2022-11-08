

import CardAmountStyle from './CardAmount.module.css'
const CardAmount = ({text='this is text',amount = '$',eventAdd,eventInfo,data}) => {
    return (
        <>
        <div className={`${CardAmountStyle.content} min-h-max bg-zinc-50 rounded-lg grid grid-cols-2`}>
            <div className={`flex items-center justify-center`}>{text}</div>
            <div className={`grid grid-rows-3 px-2 py-2`}> 
                <div className={`row-span-2 py-5`} >{amount}</div>
                <div className='grid grid-cols-2'>
                    {
                        eventInfo 
                        ? <button onClick={() => eventInfo(data.idProduct)} className={`rounded-l-lg bg-neutral-400`} >info</button>
                        : null
                    }
                    {
                        eventAdd
                        ? <button onClick={() => eventAdd(data) } className={`rounded-r-lg bg-blue-700 text-white`}>agregar</button>
                        : null
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export {CardAmount}