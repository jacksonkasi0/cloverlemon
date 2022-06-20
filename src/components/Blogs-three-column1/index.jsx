import React from "react";
import Link from "next/link";
import blogSlider3 from "../../data/sections/blogs-slider3.json";

const BlogsThreeColumn1 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <h3 className="wow" data-splitting>
            Our Blogs.
          </h3>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          {blogSlider3.map((item) => (
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay={item.wowDelay}
            >
              <div
                className="item bg-img"
                style={{ backgroundImage: `url(${item.bgImg})` }}
              >
                <div className="cont">
                  <Link href={item.tagSlug}>
                    <a className="date custom-font">
                      <span>
                        <i>{item.date}</i> {item.month_year}
                      </span>
                    </a>
                  </Link>
                  <div className="info custom-font">
                    <a href="#0" className="author">
                      <span>by / {item.author}</span>
                    </a>
                    <Link href={item.tagSlug}>
                      <a className="tag">
                        <span>{item.tag}</span>
                      </a>
                    </Link>
                  </div>
                  <h6>
                    <Link href={item.slug}>{item.title}</Link>
                  </h6>
                  <div className="btn-more custom-font">
                    <Link href={item.slug}>
                      <a className="simple-btn">Read More</a>
                    </Link>
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

export default BlogsThreeColumn1;
