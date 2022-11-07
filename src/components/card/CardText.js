import CardTextStyle from './CardText.module.css'
const CardText = () => {
    return (
        <>
        <div className={`${CardTextStyle.content} flex items-center justify-center`}>
            this is a card text
        </div>
        </>
    )
}

export {CardText}