/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";
import numbers1Data from "../../data/sections/numbers1.json";

const NumbersWithVideo = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: "url(/img/pattern.png)" }}
      >
        <div className="container">
          <div className="number-sec">
            <div className="row">
              {numbers1Data.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <div className="item no-bord">
                    <span className={`icon ${item.icon}`}></span>
                    <h3 className="custom-font">
                      <CountUp redraw={true} end={item.value} duration="3">
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <>
                              <span className="count" ref={countUpRef} />{" "}
                              {item.id == 3 ? "K" : ""}
                            </>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h3>
                    <Split>
                      <p
                        className="wow txt words chars splitting"
                        data-splitting
                      >
                        {item.txt}
                      </p>
                    </Split>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="showreel">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="video-box">
                  <div className="tit-text">
                    <Split>
                      <h3 className="wow words chars splitting" data-splitting>
                        Showreel
                      </h3>
                    </Split>
                  </div>
                  <div className="wow imago">
                    <div className="img">
                      <img src="/img/vid.jpg" alt="" />
                    </div>
                    <div className="vid-icon">
                      {typeof window !== "undefined" && (
                        <ModalVideo
                          channel="vimeo"
                          autoplay
                          isOpen={isOpen}
                          videoId="127203262"
                          onClose={() => setOpen(false)}
                        />
                      )}
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(true);
                        }}
                        className="vid"
                        href="https://vimeo.com/127203262"
                      >
                        <div className="vid-butn">
                          <span className="icon">
                            <i className="fas fa-play"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersWithVideo;
