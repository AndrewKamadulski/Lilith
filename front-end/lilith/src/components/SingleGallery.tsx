import { useParams } from "react-router-dom";
import { photoGalleries } from "../utils/PhotoGalleries";

export const SingleGallery = () => {  
  let params = useParams(); 
  let number: number;  
  if(params.currentGallery) {
  number = photoGalleries[params.currentGallery];  
  } else {
    number = 1;
  }


  let galleryPhotoArray = [];
  for (let i = 1; i < number + 1; i++) {
    let image = `http://www.lilithphotography.com/Gallery/${params.currentGallery}/${i}`;
    galleryPhotoArray.push(image);
  }

  return (
    <>
      <div className="display-1 text-center my-5">{params.currentGallery}</div>
      <div className="p-3 gallery">
        {galleryPhotoArray.map((image, index) => {
          return (
            <div
              className="gallery-images pt-1"
              key={index}
            //   onClick={() => getImg(image)}
            >
              <img src={image} style={{ width: "100%" }} alt=""></img>
            </div>
          );
        })}
      </div>
    </>
  );
};
