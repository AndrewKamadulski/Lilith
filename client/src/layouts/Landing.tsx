import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [currentPhoto, setCurrentPhoto] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhoto === 10) {
        setCurrentPhoto(1);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentPhoto]);

  const bgImageStyle = {
    backgroundImage: `url('/photos/main/${currentPhoto}')`,
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
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <Link
              to={"/Home"}
              className="btn enter-btn active position-absolute bottom-0 btn-outline-light"            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
