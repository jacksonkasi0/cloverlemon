import React from "react";
import Link from "next/link";
import Service2Data from "../../data/sections/service2.json";

const Services2 = () => {
  const arr1 = Service2Data.slice(0, 3);
  const arr2 = Service2Data.slice(3, 6);

  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          {arr1.map((service) => (
            <div
              key={service.id}
              className={`col-lg-3 wow fadeInUp ${
                service.id !== 1 && "offset-lg-1"
              } `}
              data-wow-delay=".4s"
            >
              <div className="mas-item">
                <span className={`icon ${service.icon}`}></span>
                {typeof service.name === "object" ? (
                  <h6>
                    {service.name.first} <br /> {service.name.second}
                  </h6>
                ) : (
                  <h6>{service.name}</h6>
                )}
                <div className="text-right">
                  <Link href="/about/about-dark">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row rtwo">
          {arr2.map((service) => (
            <div
              key={service.id}
              className="col-lg-3 wow offset-lg-1 fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="mas-item">
                <span className={`icon ${service.icon}`}></span>
                {typeof service.name === "object" ? (
                  <h6>
                    {service.name.first} <br /> {service.name.second}
                  </h6>
                ) : (
                  <h6>{service.name}</h6>
                )}

                <div className="text-right">
                  <Link href="/about/about-dark">
                    <a className="more">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
                <div className="bg-color"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
