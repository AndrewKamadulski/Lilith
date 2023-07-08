import React, { useEffect, useState} from 'react';


export const Landing = () => {
    const [currentPhoto, setCurrentPhoto] = useState(1);
  

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentPhoto===5){
                setCurrentPhoto(1)
            }else {
                setCurrentPhoto(currentPhoto+1)
                    }                 
            },4000)
            return ()=> clearTimeout(timer)
    },[currentPhoto])
    
    const bgImageStyle = {
        backgroundImage: `url('https://www.lilithphotography.com/photos/main/${currentPhoto}')`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',                
        zIndex: '-1', 
        backgroundRepeat: 'no-repeat'       
        
    }
    
    return (      <>                    
                    <div style={bgImageStyle}>
                        <div className='container'>                            
                                <h1 className='display-1 mt-2 align-item-center justify-content-center text-light cursive'>Lilith Photography</h1>                                                          
                        </div> 
                        <div className='me-5'>                        
                        <button type="button" className='mb-5 position-absolute bottom-0 btn btn-outline-light'>Enter</button>    
                        </div>         
                    </div>
                </>
    )
}
