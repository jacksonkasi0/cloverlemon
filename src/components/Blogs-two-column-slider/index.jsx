import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSliderData from "../../data/sections/blogs-slider.json";

const BlogsTwoColumnSlider = () => {
  return (
    <section className="blog-curs section-padding sub-bg">
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
          <div className="col-12">
            <Slider
              className="blg-swipe wow fadeInUp"
              data-wow-delay=".5s"
              {...{
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ],
              }}
            >
              {BlogSliderData.map((blog) => (
                <div className="item-box" key={blog.id}>
                  <div className="item">
                    <div className="bimg">
                      <div
                        className="img bg-img"
                        style={{ backgroundImage: `url(${blog.bgimg})` }}
                      ></div>
                    </div>
                    <div className="cont valign">
                      <div className="full-width">
                        <div className="info custom-font">
                          <a href="#0" className="author">
                            <span>by / {blog.author}</span>
                          </a>
                          <Link href="/blog/blog-dark">
                            <a className="date">
                              <span>
                                <i>{blog.date}</i> {blog.month}
                              </span>
                            </a>
                          </Link>
                        </div>
                        <h6 className="custom-font">
                          <Link href="/blog-details/blog-details-dark">
                            {blog.title}
                          </Link>
                        </h6>
                        <div className="btn-more custom-font">
                          <Link href="/blog-details/blog-details-dark">
                            <a className="simple-btn">Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsTwoColumnSlider;
