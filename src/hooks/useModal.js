
import { useState } from "react"
const useModal = () => {
    const [visible , setVisible] = useState(false);
    const open = actionModal => setVisible( actionModal );
    return {
        visible,open
    }
}

export {useModal}