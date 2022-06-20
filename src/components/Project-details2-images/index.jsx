/* eslint-disable @next/next/no-img-element */
import React from "react";
import projectDetails2Images from "../../data/sections/project-details2-images.json";

const ProjectDetails2Images = () => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            {projectDetails2Images.map((item) => (
              <div
                key={item.id}
                className={item.id === 5 ? "col-12" : "col-md-3 pr-0"}
              >
                <a href={item.image}>
                  <img alt="image" src={item.image} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
