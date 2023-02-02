import React from "react";
import './modal-edit.css';
import close_buttom from "./img/icons/close_page.svg";
import UK from "./img/icons/UK_icon.svg";
import SW from "./img/icons/SW_icon.svg";
import USA from "./img/icons/USA_icon.svg";
import JP from "./img/icons/JP_icon.svg";
import saveButon from "./img/icons/save_icon.svg";

const Modal_edit = ({state, chageState}) => {
    return(
        <>
            {state && 
                <div className="Overlay-modal">
                    <div className="container-modal">
                        <div className="modal_encabezated">
                            <h1>Edit Film</h1>
                        </div>
                        <div>
                            <input type="text" name="movie-name" id="movie-name" placeholder="movie name"/>
                        </div>
                        <div className="inputs-container">
                            <input type="text" name="movie-director" id="movie-director" placeholder="director name" />
                            <input type="text" name="movie-duration" id="movie-duration" placeholder="duration" />
                                <select name="country" id="country">
                                    <option value="UK">UK<img src={UK}/></option>
                                    <option value="SW">SW<img src={SW}/></option>
                                    <option value="USA">USA<img src={USA}/></option>
                                    <option value="JP">JP<img src={JP}/></option>
                                </select>
                                <select name="year" id="year">
                                    <option value="year">year</option>
                                </select>
                                <select name="lenguaje" id="lenguaje">
                                    <option value="lenguaje">lenguaje</option>
                                </select>
                                <input type="date" name="premiere" id="premiere"/>
                        </div>
                        <button className="save_button"><img src={saveButon}/>Save</button>
                        <button onClick={() => chageState(false)} className="close_button"><img src={close_buttom}/></button>
                    </div>
                </div> 
            } 
        </>
    )
}

export default Modal_edit;