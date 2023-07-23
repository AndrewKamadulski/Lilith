export const SocialMedia = () => {
    return(
        <div className="col-12" id="contact-footer">
          <div className="d-flex justify-content-center">
          <a href="https://www.facebook.com/LilithPhotography34/">
            <img className="contact-icon mx-3" src={require("../icons/Facebook.png")} alt="logo" />
          </a>
          <a href="https://www.instagram.com/lilithphotography/?hl=en"><img className="contact-icon mx-3" src={require("../icons/instagram.png")} alt="logo" /></a>
          <a href="mailto:shellyk@lilithphotography.com"><img className="contact-icon mx-3 " src={require("../icons/email.png")} alt="logo" /></a>
        </div>
        </div>
    );
}