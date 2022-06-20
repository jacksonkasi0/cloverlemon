/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import works2Data from "../../data/sections/works2.json";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery full-width">
            {works2Data.map((item) => (
              <div className={`col-lg-4 col-md-6 items ${item.filterCategory}`}>
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details/project-details-dark">
                    <a>
                      <img src={item.img} alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <span>
                    {item.tags.map((tag, index) => (
                      <React.Fragment key={index * 3}>
                        <Link href={item.tagSlug[index]}>{tag}</Link>
                        {index == item.tags.length - 1 ? "" : ","}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
