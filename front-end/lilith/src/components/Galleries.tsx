
import { photoGalleries } from "../utils/PhotoGalleries";
import { Link } from "react-router-dom";

export const Galleries: React.FC<{
  currentGallery: string;
  setCurrentGallery: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const { setCurrentGallery } = props;

  let galleryList = [...Object.keys(photoGalleries)];

  return (
    <>
      <div className="display-2">
        Galleries
        <hr></hr>
      </div>

      {/* Desktop */}
      <div className="d-none d-lg-block p-2">
        <div className="gallery">
          {galleryList.map((gallery) => {
            const bgImage = {
              backgroundImage: `url('http://www.lilithphotography.com/Gallery/${gallery}/1')`,
              display: "inline-block",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              margin: "5px",
              padding: "0 5px",
              height: "30vh",
              width: "32vw",
            };

            return (
              <Link className="cursive" to={`/Galleries/${gallery}`}>
                <div
                  onClick={() => setCurrentGallery(gallery)}
                  className="gallery gallery-pics"
                  style={Object.assign(bgImage)}
                  key={gallery}
                >
                  <p>{gallery}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile */}

      <div className="d-lg-none">
        {galleryList.map((gallery) => {
          const bgImage = {
            backgroundImage: `url('http://www.lilithphotography.com/Gallery/${gallery}/1')`,
            display: "inline-block",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            margin: "5px",
            padding: "0 5px",
            height: "250px",
            width: "400px",
          };

          return (
            <Link className="cursive" to={`/Galleries/${gallery}`}>
              <div
                onClick={()=>setCurrentGallery(gallery)}
                className="gallery gallery-pics"
                style={Object.assign(bgImage)}
                key={`${gallery} + "1"`}
              >
                <p>{gallery}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
