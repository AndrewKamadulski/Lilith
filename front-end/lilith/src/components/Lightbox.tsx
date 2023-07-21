import Modal from "react-bootstrap/Modal";

export const Lightbox: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lightBoxImage: string;
  setLightBoxImage: React.Dispatch<React.SetStateAction<string>>;
  index: number;
}> = (props) => {
  const { isOpen, setIsOpen, lightBoxImage, setLightBoxImage, index } = props;

  const hideLightbox = () => {
    setIsOpen(false);
  };

  const imgFwd = () => {
    const id = lightBoxImage.split("/");
    console.log(id)
    id[3] = (parseInt(id[3]) + 1).toString();

    // reset gallery once end is reached
    if (parseInt(id[3]) === index) {
      id[3] = "1";
    }
    const url = id.join("/");
    console.log(url)
    setLightBoxImage(url);
  };

  const imgBack = () => {
    const id = lightBoxImage.split("/");
    id[3] = (parseInt(id[3]) - 1).toString();

    // reset gallery once beginning is reached
    if (parseInt(id[3]) === 0) {
      id[3] = (index - 1).toString();
    }
    const url = id.join("/");
    setLightBoxImage(url);
  };

  return (
    <>
      <Modal contentClassName="lightbox" show={isOpen} onHide={hideLightbox}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img
              className="lightbox-image"
              src={lightBoxImage}
              alt="portrait"
            />
          </div>
          <i
            className="lightbox-close-btn bi bi-x-square lightbox-icon"
            onClick={hideLightbox}
          ></i>
          <i
            className="lightbox-left-btn bi bi-arrow-left-square lightbox-icon"
            onClick={imgBack}
          ></i>
          <i
            className="lightbox-right-btn bi bi-arrow-right-square lightbox-icon"
            onClick={imgFwd}
          ></i>
        </Modal.Body>
      </Modal>
    </>
  );
};
