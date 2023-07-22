import { Link } from "react-router-dom";

export const ArtYouCanEnjoy = () => {
  return (
    <>
      <div className="col-12">
        <div className="mt-5">
          <hr></hr>
        </div>
      </div>
      <div className="col-12 m-1 d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-block col-lg-3 mx-3">
          <img
            className="about-section-image"
            src="/photos/about/Clouds"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-3 mx-3">
          <img
            className="about-section-image"
            src="/photos/about/Frog"
            alt=""
          />
        </div>
        <div className="d-none d-lg-block col-3 mx-3">
          <img
            className="about-section-image"
            src="/photos/about/Hands"
            alt=""
          />
        </div>
      </div>
      <div className="col-12 d-flex m-1">
        <div className="fs-4 mt-5 p-5 text-center">
          <span className="display-2">Art you can enjoy every day!</span>
          <br></br>
          <hr className="p-3"></hr>I would love the chance to meet your family
          and make some art together. I look forward to meeting with you and
          learning how I can help you fulfill your vision. Whether you are
          welcoming a new baby or documenting the growth of your child, I know
          how incredibly important these images are as the moments are so
          fleeting. Your session will be precisely tailored to create beautiful
          images that you'll love now and forever!
          <br></br>
          <div className="d-flex justify-content-center">
            <Link
              to="/Contact"
              type="button"
              className="btn btn-lg btn-outline-dark mt-5"
            >
              Contact
            </Link>
          </div>
          <hr className="mt-5"></hr>
        </div>
      </div>
    </>
  );
};
