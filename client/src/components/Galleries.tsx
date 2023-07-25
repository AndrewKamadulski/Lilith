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
      <div className="display-2 pt-2 ps-3">
        Galleries
        <hr></hr>
      </div>
      <div className="p-2">
        <div className="gallery">
          {galleryList.map((gallery) => {
            const bgImage = {
              backgroundImage: `url('/Gallery/${gallery}/1')`,
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
              <Link
                className="cursive"
                to={`/Galleries/${gallery}`}
                key={gallery}
              >
                <div
                  onClick={() => setCurrentGallery(gallery)}
                  className="gallery-pics"
                  style={Object.assign(bgImage)}
                >
                  <p>{gallery}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
