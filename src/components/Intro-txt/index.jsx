import React from "react";
import aboutMe from "../../data/sections/about-me.json";

const IntroTxt = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: `url()${aboutMe.bgimg}` }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>{aboutMe.name}</h1>
              <h4>{aboutMe.work}</h4>
              <div className="social-icon">
                {aboutMe.social.map((item, index) => (
                  <React.Fragment key={index}>
                    <a href={item.link} className="icon">
                      <i className={`fab ${item.class}`}></i>
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
