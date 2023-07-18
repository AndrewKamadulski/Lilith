import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const Lightbox:React.FC<{isOpen: boolean, setIsOpen: any}> = (props) => {
     
    const {isOpen, setIsOpen} = props;

    
    
      const hideLightbox = () => {
        setIsOpen(false);
      };
    

    return(
        <>
        <div>Lightbox</div>
        <Modal contentClassName="lightbox" show={isOpen} onHide={hideLightbox}>
        <Modal.Body>
            <div style={{height:200}}><h1> MODAL OPEN</h1></div>
            <button className="lightbox-close-btn" onClick={hideLightbox}>Close</button>   
        </Modal.Body>
        
        </Modal>
        </>
    );
}