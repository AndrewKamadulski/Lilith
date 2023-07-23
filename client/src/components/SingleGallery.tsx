import { useParams } from "react-router-dom";
import { photoGalleries } from "../utils/PhotoGalleries";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

export const SingleGallery = () => {  

  const [lightBoxImage, setLightBoxImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showLightbox = () => {
    setIsOpen(true);
  };

  let {currentGallery} = useParams(); 
  let index: number;  
  if(currentGallery) {
  index = photoGalleries[currentGallery];  
  } else {
    index = 1;
  }


  let galleryPhotoArray = [];
  for (let i = 1; i <= index ; i++) {
    let image = `/Gallery/${currentGallery}/${i}`;
    galleryPhotoArray.push(image);
  }

  const handleImageClick = (image:string) => {
      setLightBoxImage(image); 
      showLightbox();   
  }

  return (
    <>
    
      <div className="display-1 text-center my-5">{currentGallery}</div>
      <div className="d-none d-lg-block">
      <div className="p-3 gallery">
        {galleryPhotoArray.map((image, index) => {
          return (
            <div
              className="gallery-images py-2"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} style={{ width: "100%" }} alt=""></img>
            </div>
          );
        })}
      </div>
      </div>

       {/* Mobile */}

       <div className="d-lg-none">
      <div className="p-3">
        {galleryPhotoArray.map((image, index) => {
          return (
            <div
              className="gallery-images py-1"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} style={{ width: "100%" }} alt=""></img>
            </div>
          );
        })}
      </div>
      </div>

      {/* Lightbox */}
        <Lightbox isOpen={isOpen} setIsOpen={setIsOpen} lightBoxImage={lightBoxImage} setLightBoxImage={setLightBoxImage} index={index}/>
    </>
  );
};
