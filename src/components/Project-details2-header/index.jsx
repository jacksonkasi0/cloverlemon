import React from "react";
import Link from "next/link";
import projectDetails2 from "../../data/sections/project-details2.json";

const ProjectDetails2Header = () => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: `url(${projectDetails2.header.bgimg})` }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{projectDetails2.header.smTitle}</h6>
              <h2>{projectDetails2.header.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href={projectDetails2.header.slug}>
                  {projectDetails2.header.client}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{projectDetails2.header.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {projectDetails2.header.Categories.map((item, index) => (
                  <React.Fragment key={index * 3}>
                    <Link href={projectDetails2.header.CategorieSlug[index]}>
                      {item}
                    </Link>
                    {index == projectDetails2.header.Categories.length - 1
                      ? ""
                      : ","}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {projectDetails2.header.tags.map((item, index) => (
                  <React.Fragment key={index * 3}>
                    <Link href={projectDetails2.header.tagSlug[index]}>
                      {item}
                    </Link>
                    {index == projectDetails2.header.Categories.length
                      ? ""
                      : ","}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
