export const About = () => {
  return (
    <>
      <div className="about-container p-4">
        <div className="col-12 col-lg-6 d-flex m-1 order-1">
          <p className="fs-4 m-1 pb-5 text-center">
            I am <span className="fs-1">Shelly Kamadulski</span>, owner of
            Lilith Photography <br></br>
            <br></br>
            &emsp;My love for photography began when my daughter was born
            because I wanted to preserve every moment of her little life. Since
            then, I've become a bit obsessed with photography. I purchased my
            first professional camera in 2010 while studying Art at SWIC and
            knew that I wanted to capture those little details for other
            mothers. In 2016, I earned my Bachelor's of Fine Arts in Photography
            from SIUE and opened my studio in Granite City, IL. Now, I am
            honored to be able to also capture those special moments for you and
            your family.
          </p>
        </div>
        <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center pb-5 order-lg-2 order-first">
          <img
            className="about-section-image"
            src="/photos/about/ShellySunflower"
            style={{ width: 300, height: 400 }}
            alt="Portrait of Shelly"
          />
        </div>
        <div className="col-12 order-3">
          <hr></hr>
        </div>
        <div className="col-12 col-lg-5 d-flex m-3 order-4">
          <img
            className="about-section-image"
            src="/photos/about/Family"
            alt=""
          />
        </div>

        <div className="col-12 col-lg-6 d-flex order-5">
          <div className="fs-4 p-4 mt-5 text-center">
            <span className="about-section-banner">I want to be there!</span>
            <br></br>
            <p className="mt-3">My heart is in photographing relationships. The
            relationship between a mother and child, the love of a husband and
            wife, and the bonds between the entire family. That look of beaming
            happiness while holding your newborn, <b>I want to be there.</b> The
            exhilaration and joy when your baby is experiencing new milestones, 
            <b> I want to be there.</b> As your children grow and explore the
            world,
            <b> I want to be there</b> to capture those remarkable moments with
            you!
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};
