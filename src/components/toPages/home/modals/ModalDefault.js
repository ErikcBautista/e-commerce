
import LayoutModal from "../../../Modal/Modal.js";
import ModalDefaultStyle from './ModalDefaultStyle.module.css';

const Footer = () => (
    <div className={ModalDefaultStyle.modalFooter}>
        footer
    </div>
)

const Content = () => (
    <div className={ModalDefaultStyle.modalContent}>
        content
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

const Modal = ({close}) => (
    <div className={ModalDefaultStyle.modal}>
        <Header eventAction={close}/>
        <Content/>
        <Footer/>
    </div>
)

const ModalDefault = ({open,close}) => {
    return (
        open && <LayoutModal children={<Modal close={close}/>}/>
    )
}

export default ModalDefault;