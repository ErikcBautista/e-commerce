import React from "react";
import ModalStyle from './ModalStyle.module.css';

const LayoutModal = ({children}) =>{
    return(
        <>
        <div className={ModalStyle.overlay}>
            {children}
        </div>
        </>
    )
}

export default LayoutModal;