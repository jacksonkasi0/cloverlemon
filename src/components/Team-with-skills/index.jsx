/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import teamSkills from '../../data/sections/team-skills.json'

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect()
    teamSkillsProgress()
  }, [])
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                {teamSkills.title}
              </h3>
              <p>
                {teamSkills.content}
              </p>
              <div className="skills-box mt-40">
               
               {
                teamSkills.skills.map((item,index)=>(
                  <div key={index} className="skill-item">
                  <h6 className="custom-font">{item.skill}</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value={item.percentage}></div>
                  </div>
                </div>
                ))
               }
                
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div
                      className="img sizxl mb-30"
                      data-tooltip-tit={teamSkills.images[0].title}
                      data-tooltip-sub={teamSkills.images[0].sub}
                    >
                      <img src={teamSkills.images[0].image} alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizmd"
                      data-tooltip-tit={teamSkills.images[1].title}
                      data-tooltip-sub={teamSkills.images[1].sub}
                    >
                      <img src={teamSkills.images[1].image} alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit={teamSkills.images[2].title}
                      data-tooltip-sub={teamSkills.images[2].sub}
                    >
                      <img src={teamSkills.images[2].image} alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizsm"
                      data-tooltip-tit={teamSkills.images[3].title}
                      data-tooltip-sub={teamSkills.images[3].sub}
                    >
                      <img src={teamSkills.images[3].image} alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills