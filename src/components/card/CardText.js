import CardTextStyle from './CardText.module.css'
const CardText = ({text='this is a card text'}) => {
    return (
        <>
        <div className={`${CardTextStyle.content} bg-gray-800 rounded-lg  flex items-center justify-center`}>
            {text}
        </div>
        </>
    )
}

export {CardText}