import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [currentPhoto, setCurrentPhoto] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhoto === 5) {
        setCurrentPhoto(1);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentPhoto]);

  const bgImageStyle = {
    backgroundImage: `url('https://www.lilithphotography.com/photos/main/${currentPhoto}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    zIndex: "-1",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={bgImageStyle}>
        <div className="d-flex mt-3 justify-content-center align-items-center">
          <div>
            <Link
              to={"/Home"}
              className="mb-5  btn btn-lg active position-absolute bottom-0 btn-outline-light"
            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
