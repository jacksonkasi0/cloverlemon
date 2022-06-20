import React from "react";
import Split from "../Split";
import Link from "next/link";
import Service1Data from "../../data/sections/service1.json";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              Best Of <br /> Our Features
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
          </div>
          {Service1Data.map((service) => (
            <div
              key={service.id}
              className="col-lg-3 col-md-6 item-box wow fadeInLeft"
              data-wow-delay={`${service.wowDelay}`}
            >
              <span className={`icon ${service.icon}`}></span>
              {typeof service.title === "object" ? (
                <>
                  <h6>
                    {service.title.first}{" "}
                    {service.title.symbol && (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `${service.title.symbol}`,
                        }}
                      />
                    )}
                  </h6>
                  <h6>{service.title.second}</h6>
                </>
              ) : (
                <h6>{service.title}</h6>
              )}
              <p>{service.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
