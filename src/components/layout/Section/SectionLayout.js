
import SectionLayoutStyle from './SectionLayout.module.css';

const SectionLayout = ({title='',children}) => {
    return (
        <>
        <div className={`font-mono text-2xl bg-gray-600 text-white px-10`}>{title}</div>
        <div className={`container ${SectionLayoutStyle.content} p-10 flex flex-wrap 
        justify-center`}>
            {children}
        </div>
        </>
    )
}

export default SectionLayout;