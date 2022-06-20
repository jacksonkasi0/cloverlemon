import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import aboutMe from "../../data/sections/about-me.json";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                {aboutMe.title}
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {aboutMe.brief}
              </p>
              <a href={aboutMe.cvLink} className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              {aboutMe.skills.map((item, index) => (
                <div key={index} className="skill-item">
                  <h6 className="custom-font">{item.skill}</h6>
                  <div className="skill-progress">
                    <div
                      className="progres custom-font"
                      data-value={item.percentage}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
