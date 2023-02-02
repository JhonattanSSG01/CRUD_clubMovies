import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import {faFloppyDisk} from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

function PopUpAdd() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='App '>
      <Button className='btn ' onClick={handleShow}>
         Add
         <i className="ri-add-line icon"></i>
      </Button>

      <Modal
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton  >
          <Modal.Title style={{margin:"auto",
        color:"gray"}}>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        Title
        <input className='title' type="text"/>
        <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        
        }}>
        <p>
        Director
        <input className='director'  type="text"/>
        </p>

        <p>
        Duration
        <input className='director' type="text"/>
        </p>
        </div>

        <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
        }} >
         <p>
       Country
       <FontAwesomeIcon className='iconos' icon={faChevronDown}  style={{marginLeft:"105px", cursor:"pointer"}} />
       <hr style={{ width:"225px" }}  />
        </p>

        <p>
       Year
       <FontAwesomeIcon className='icon' icon={faChevronDown}  style={{marginLeft:"135px", cursor:"pointer"}} />
       <hr style={{ width:"225px" }}  />
        </p>
        </div>

        <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
        }} >
        <p>
       Lenguaje
       <FontAwesomeIcon className='iconos' icon={faChevronDown}  style={{marginLeft:"100px", cursor:"pointer"}} />
       <hr style={{ width:"225px" }}  />
        </p>

        <p>
        Premiere
        <FontAwesomeIcon className='iconos' icon={faChevronDown}  style={{marginLeft:" 100px", cursor:"pointer"}} />
       <hr style={{ width:"225px" }}  />
        </p>


        </div>

        </Modal.Body>
        <Modal.Footer>
         
          <Button className='agg'>
          <FontAwesomeIcon icon= {faFloppyDisk} style={{marginRight:"10px"}} />
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default PopUpAdd;