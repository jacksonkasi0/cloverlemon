import React from "react";
import projectDetails2 from "../../data/sections/project-details2.json";

const ProjectDetailsDescription = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>02 </span> Description
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">{projectDetails2.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsDescription;
