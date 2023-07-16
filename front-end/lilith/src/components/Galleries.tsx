import { url } from "inspector";
import { useState } from "react";

export const Galleries = () => {
    // let {currentGallery} = useParams(); 
    let currentGallery = null;
 

    // photos is the object that contains the list of galleries and the number of photos in that gallery
    // number corresponds to the number of photos in each gallery and is used as the index to map the photos
    // galleryList is the array used to map the main Gallery page
    // galleryPhotoArray makes an array with the urls for each individual photo that is then mapped in the individual gallery page
    // label photos in the galleries with integers, must be sequential
    // to add a new gallery in images folder on server, must also add here, MenuItems component, Dropdown component (if you want them in nav menu)
    // modal and tempImg are for the lightbox display once a photo is clicked
    
    let photoGalleries = {"Newborn": 21, "Children" : 28, "Family": 21, "Maternity": 9, "Senior": 22, "Couples": 10, "Santa": 18, "Sunflowers": 13, "Christmas": 14, "Cakesmash": 12, "PurpleClover":10, "Beach":11}
    let number = 8
    let galleryList = [...Object.keys(photoGalleries)]
    
    
    const [tempImg, setTempImg] = useState('');
    
    const getImg = (image: string) => {
        setTempImg(image);                              
    }
 
   
    
    
    let galleryPhotoArray = []
    for(let i = 1; i < number+1; i++) {
    let image = `http://www.lilithphotography.com/Gallery/${currentGallery}/${i}`
    galleryPhotoArray.push(image)
    }
    
    // adjust the size of photo for mobile
    let bgSize ={}
    if(window.innerWidth<600) {
        bgSize = {
            height: "90vh",
            width: "90vw",
        };
    } else {
           bgSize = {
                height: "33vh",
                width: "32vw",
            };
        }
    
    
     if(currentGallery) { 
       return(
            <>   
            <div>{currentGallery}</div>             
            <div className="gallery">      
            {galleryPhotoArray.map((image, index)=>{
                return (
                    <div className='pics pt-1' key={index} onClick={()=>getImg(image)}>
                        <img src= {image} alt={"portrait"} style={{width:'100%'}}></img> 
                    </div>
                )
            })}
            </div>
            </>
        );   
     } else {   
        return(
            <>           
            <div className="display-2 mx-5">
                Galleries
            <hr></hr>
            </div>            
            <div className='gallery m-3'>              
                <div className="d-none d-lg-block">               
                
                {galleryList.map((gallery)=>{           
                    const bgImageStyle = {
                        backgroundImage: `url('http://www.lilithphotography.com/Gallery/${gallery}/1')`,
                        display: 'inline-block',
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',               
                        backgroundRepeat: 'no-repeat',                               
                        BreakInside: 'avoid-column',
                        color: 'white',
                        margin: "5px",
                        padding: "0 5px",                                             
                    }
                
                
                return (                               
                    <a className="cursive" href="/">
                    <div className="gallery gallery-pics" style={Object.assign(bgImageStyle,bgSize)} key={gallery} > 
                        <p>{gallery}</p> 
                    </div>
                    </a>            
                                
                    )
                 })}
            </div>  
            </div> 
            <div className="d-lg-none">
            <a href="http://www.lilithphotography.com/Gallery">
                    <div className="gallery gallery-pics" style={{backgroundImage: 'url("http://www.lilithphotography.com/Gallery/PurpleClover/1")', height:500, backgroundPosition:"center"}}>                    </div>
                </a>  
            </div>      
            </>
           );
        }
}