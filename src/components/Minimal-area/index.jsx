/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import aboutUsBrief from "../../data/sections/about-us-brief.json";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src={aboutUsBrief.bgimg}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  {aboutUsBrief.title}
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  {aboutUsBrief.content}
                </p>
              </Split>
              <ul className="feat">
                {aboutUsBrief.aim.map((item, index) => (
                  <li
                    key={index}
                    className="wow fadeInUp"
                    data-wow-delay={item.wowDelay}
                  >
                    <h6>
                      <span>{index + 1}</span> {item.subtle}
                    </h6>
                    <p>{item.subcont}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
