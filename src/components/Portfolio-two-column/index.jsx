/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfoilio2Data from "../../data/sections/portfolio2.json";

const PortfolioTwoColumn = () => {
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
        <div className="gallery full-width">
          {portfoilio2Data.map((item) => (
            <div
              key={item.id}
              className={`col-md-6 items ${item.filterCategory} `}
            >
              <div className={item.class.length > 0 && item.class[0]}>
                <div className={item.class.length > 0 && item.class[1]}>
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <Link href={item.slug}>
                      <a>
                        <img src={item.image} alt="image" />
                      </a>
                    </Link>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
