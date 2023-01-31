import React,{ useState } from "react";
import ModalE from "./Modal_edit";

const Padre_modal = () => {

    const [ModalState1, ChageStateModal1] = useState(false);

    return(
        <>
        <button onClick={()=> ChageStateModal1(!ModalState1) }>Editar pelicula</button>
        <ModalE state={ModalState1} 
        chageState={ChageStateModal1}/>
        </>
    );
}

export default Padre_modal;
