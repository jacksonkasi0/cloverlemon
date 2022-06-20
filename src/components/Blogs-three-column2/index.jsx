/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import blogSlider4Data from "../../data/sections/blogs-slider4.json";

const BlogsThreeColumn2 = ({ subBG }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Our Blogs.
            </h3>
          </Split>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          {blogSlider4Data.map((blog, index) => (
            <div key={index} className="col-lg-4">
              <div
                className="item list md-mb50 wow fadeInUp"
                data-wow-delay={blog.wowDelay}
              >
                <div className="img">
                  <img src={blog.image} alt="" />
                </div>
                <div className="cont">
                  <Link href={blog.dateSlug}>
                    <a className="date custom-font">
                      <span>
                        <i>{blog.date}</i> {blog.month}
                      </span>
                    </a>
                  </Link>

                  <div className="info custom-font">
                    <a href={blog.authorSlug} className="author">
                      <span>by / {blog.author}</span>
                    </a>
                    <Link href={blog.tagSlug}>
                      <a className="tag">
                        <span>{blog.tag}</span>
                      </a>
                    </Link>
                  </div>
                  <h6>
                    <Link href={blog.slug}>{blog.title}</Link>
                  </h6>
                  <div className="btn-more custom-font">
                    <Link href={blog.slug}>
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

export default BlogsThreeColumn2;
