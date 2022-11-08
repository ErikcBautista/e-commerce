
import LayoutModal from "../../../Modal/Modal.js";
import ModalDefaultStyle from './ModalDefaultStyle.module.css';

const Footer = ({footer=''}) => (
    <div className={ModalDefaultStyle.modalFooter}>
        {footer}
    </div>
)

const Content = ({content=''}) => (
    <div className={ModalDefaultStyle.modalContent}>
        {content}
    </div>
)

const Header = ({headerTitle = 'Modal Title',headerAction='X',eventAction}) => (
    <div className={ModalDefaultStyle.ModalHeader}>
        <div className={ModalDefaultStyle.headerTitle}>
            {headerTitle}
        </div>
        <div className={ModalDefaultStyle.headerAction} onClick={()=>{eventAction()}}>
            {headerAction}
        </div>
    </div>
);

const Modal = ({close,headerTitle,content,footer}) => (
    <div className={ModalDefaultStyle.modal}>
        <Header headerTitle={headerTitle} eventAction={close}/>
        <Content content={content}/>
        <Footer footer={footer}/>
    </div>
)

const ModalDefault = ({open,close,headerTitle,content,footer}) => {
    return (
        open && <LayoutModal children={
            <Modal close={close}
                headerTitle={headerTitle}
                content={content}
                footer={footer}
            />
        }/>
    )
}

export default ModalDefault;