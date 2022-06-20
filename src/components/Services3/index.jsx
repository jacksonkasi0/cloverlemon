import React from "react";
import Link from "next/link";
import Servic3Data from "../../data/sections/service3.json";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services.</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          {Servic3Data.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-delay={service.wowDelay}
            >
              <div className={`step-item ${service.class}`}>
                <span className={`icon ${service.icon}`}></span>
                <h6>
                  <span
                    dangerouslySetInnerHTML={{ __html: `${service.title}` }}
                  />
                </h6>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="smore custom-font">
          <Link href="/about/about-dark">Discover More</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Services3;
