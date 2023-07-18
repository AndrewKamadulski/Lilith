import Modal from "react-bootstrap/Modal";

export const Lightbox:React.FC<{isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, lightBoxImage: string, setLightBoxImage: React.Dispatch<React.SetStateAction<string>>, index:number}> = (props) => {
     
    const {isOpen, setIsOpen, lightBoxImage, setLightBoxImage, index} = props;    
    
      const hideLightbox = () => {
        setIsOpen(false);
      };
    
    
const imgFwd = () => {  
             
    const id = (lightBoxImage.split('/')) 
    id[5] = ((parseInt(id[5]) + 1 )).toString();

// reset gallery once end is reached
    if(parseInt(id[5]) === index) {
        id[5]="1"
    }  
    const url = id.join("/")
    setLightBoxImage(url)   
}

const imgBack = () => {   
    console.log(lightBoxImage)
        const id = (lightBoxImage.split('/'))  
        id[5] = ((parseInt(id[5]) - 1 )).toString();
   
    // reset gallery once beginning is reached
    if(parseInt(id[5]) === 0) {
        id[5] = (index - 1 ).toString()               
    }    
    const url = id.join("/")
    setLightBoxImage(url)    
        
   
}

    return(
        <>       
        <Modal contentClassName="lightbox" show={isOpen} onHide={hideLightbox}>
        <Modal.Body>
            <div className="d-flex justify-content-center">
            <img className="lightbox-image" src={lightBoxImage} alt="portrait"/>
            </div>
            <i className="lightbox-close-btn bi bi-x-square lightbox-icon" onClick={hideLightbox}></i>
            <i className="lightbox-left-btn bi bi-arrow-left-square lightbox-icon" onClick={imgBack}></i>
            <i className="lightbox-right-btn bi bi-arrow-right-square lightbox-icon" onClick={imgFwd}></i>
            
            
        </Modal.Body>
        
        </Modal>
        </>
    );
}