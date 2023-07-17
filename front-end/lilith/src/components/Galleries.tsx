import { useState } from "react";
import { photoGalleries } from "../utils/PhotoGalleries";
import { Link } from "react-router-dom";

export const Galleries: React.FC<{currentGallery: any, setCurrentGallery:any}> = (props) => {    
  const  {currentGallery, setCurrentGallery} = props;
    
    let number = 8
    let galleryList = [...Object.keys(photoGalleries)]    
    
    
    
    
 
   
    
    
    let galleryPhotoArray = []
    for(let i = 1; i < number+1; i++) {
    let image = `http://www.lilithphotography.com/Gallery/${currentGallery}/${i}`
    galleryPhotoArray.push(image)
    }  
       
    
    
        return(
            <>           
            <div className="display-2 m-5">
                Galleries
            <hr></hr>
            </div>            
            <div className='gallery m-3'>             
                <div className="d-none d-lg-block">              
                
                {galleryList.map((gallery)=>{           
                    const bgImage = {
                        backgroundImage: `url('http://www.lilithphotography.com/Gallery/${gallery}/1')`,
                        display: 'inline-block',
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',           
                        color: 'white',
                        margin: "5px",
                        padding: "0 5px",
                        height: "300px",
                        width: "600px"                                             
                    }
                
                
                return (                               
                    <Link className="cursive" to={`/Galleries/${currentGallery}`}>
                    <div onClick={()=>setCurrentGallery(gallery)} className="gallery gallery-pics" style={Object.assign(bgImage)} key={gallery} > 
                        <p>{gallery}</p> 
                    </div>
                    </Link>            
                                
                    )
                 })}
            </div>  
            </div> 
            <div className="d-lg-none">
            <Link to={`/Galleries/${currentGallery}`}>
                    <div className="gallery gallery-pics m-3" style={{backgroundImage: 'url("http://www.lilithphotography.com/Gallery/PurpleClover/1")', height:500, backgroundPosition:"center"}}>                    </div>
                </Link>  
            </div>      
            </>
           );
        
}