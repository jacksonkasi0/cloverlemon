/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";
import works1Data from "../../data/sections/works1.json";

const WorksStyle1 = () => {
  React.useEffect(() => {
    tooltipEffect();
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container">
        <div className="row lg-space">
          {works1Data.map((work) => (
            <div
              key={work.id}
              className={`col-lg-4 col-md-6 ${work.id % 2 === 0 && "valign"} `}
            >
              <div className="item">
                <Link href={work.slug}>
                  <a>
                    <div
                      className="img"
                      data-tooltip-tit={work.title}
                      data-tooltip-sub={work.subtitle}
                    >
                      <img src={work.img} alt="" />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
