import React from "react";
import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./CarouselSlickMode.scss";
import { Col, Row } from "antd";
import styles from "./Carousel.module.scss";

//component custom for next button slcik
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="setNext"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsChevronCompactRight />
    </div>
  );
}

//component custom for next button slcik
function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="setPrev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsChevronCompactLeft />
    </div>
  );
}

const Carousel = (props) => {
  // cau hinh cho slick carousel
  let settingsCarouser = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => {
      return <ul style={{ bottom: 0 }}>{dots}</ul>;
    },
    customPaging: (pagi, i) => {
      const style = {
        width: 7,
        height: 7,
        borderRadius: "100%",
        display: "inline-block",
        background: "rgb(13, 148, 136)",
        opacity: 0.4,
        transition: "0.4s",
      };
      return <span className="slickDots" style={style} />;
    },
  };

  // scroll to view
  const handleScrollToViewCourse = () =>
    props.viewCourseRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Slider className={styles.bannerSlide} {...settingsCarouser}>
      <div className={styles.banner1}>
        <Row>
          <Col className={styles.bannerLeft} xs={24} md={12} xl={12}>
            <img
              src={require("../../assets/image/imgBanner/paper_plane.93dfdbf5.png")}
              alt="..."
            />
            <div className={styles.flyAngle}></div>
            <div className={styles.BgDot1}></div>
            <div className={styles.BgDot2}></div>
            <div className={styles.BgDot3}></div>
            <div className={styles.carouselText}>
              <h2>Chào mừng đến với môi trường</h2>
              <div className={styles.textAnimation}>
                <h1>ELearning</h1>
              </div>
              <button
                onClick={handleScrollToViewCourse}
                className="bg-blue-600 uppercase mt-5 py-2 px-5 text-lg text-white hover:scale-95 hover:rounded-md transition duration-500"
              >
                Bắt Đầu Nào
              </button>
            </div>
          </Col>
          <Col className={styles.bannerRight} xs={24} md={12} xl={12}>
            <img
              src={require("../../assets/image/imgBanner/slider2.f170197b.png")}
              alt="..."
            />
            <img
              className={styles.imgBanner2}
              src={require("../../assets/image/imgBanner/clouds.15eb556c.png")}
              alt="..."
            />
            <img
              className={styles.imgBanner3}
              src={require("../../assets/image/imgBanner/clouds.15eb556c.png")}
              alt="..."
            />
            <img
              className={styles.imgBanner4}
              src={require("../../assets/image/imgBanner/clouds.15eb556c.png")}
              alt="..."
            />
            <img
              className={styles.imgBanner5}
              src={require("../../assets/image/imgBanner/message_slider.6835c478.png")}
              alt="..."
            />
          </Col>
        </Row>
      </div>

      {/* <div className={styles.banner1}>
        <Row>
          <Col className={styles.bannerLeft} xs={24} md={12} xl={12}>
            <img style={{ width: '30%' }} src={require('../../assets/image/imgBanner/paper_plane.93dfdbf5.png')} alt="..." />
            <div className={styles.flyAngle}></div>
            <div className={styles.BgDot1}></div>
            <div className={styles.BgDot2}></div>
            <div className={styles.BgDot3}></div>
            <div className={styles.carouselText}>
              <h2>Học Lập Trình</h2>
              <div className={styles.textAnimation2}>
                <h1>Front End Chuyên Nghiệp</h1>
              </div>
              <button
                onClick={handleScrollToViewCourse}
                className='bg-green-700 uppercase mt-5 py-2 px-5 text-lg text-white hover:scale-95 hover:rounded-md transition duration-500'>Bắt Đầu Nào</button>
            </div>
          </Col>
          <Col className={styles.bannerRight} xs={24} md={12} xl={12}>
            <img className='mt-28' src={require('../../assets/image/imgBanner/slide4.png')} alt="..." />
            <img className={styles.imgBanner2} src={require('../../assets/image/imgBanner/clouds.15eb556c.png')} alt="..." />
            <img className={styles.imgBanner3} src={require('../../assets/image/imgBanner/clouds.15eb556c.png')} alt="..." />
            <img className={styles.imgBanner4} src={require('../../assets/image/imgBanner/clouds.15eb556c.png')} alt="..." />
          </Col>

        </Row>
      </div>

      <div className={styles.banner1}>
        <Row>
          <Col className={styles.bannerLeft} xs={24} md={12} xl={12}>
            <img src={require('../../assets/image/imgBanner/paper_plane.93dfdbf5.png')} alt="..." />
            <div className={styles.flyAngle}></div>
            <div className={styles.BgDot1}></div>
            <div className={styles.BgDot2}></div>
            <div className={styles.BgDot3}></div>
            <div className={styles.carouselText}>
              <h2>Khởi Đầu Sự Nghiệp Của Bạn</h2>
              <div className={styles.textAnimation}>
                <h1>ELearning</h1>
              </div>
              <button onClick={handleScrollToViewCourse} className='bg-green-700 uppercase mt-5 py-2 px-5 text-lg text-white hover:scale-95 hover:rounded-md transition duration-500'>Bắt Đầu Nào</button>
            </div>
          </Col>
          <Col className={styles.bannerRight} xs={24} md={12} xl={12}>
            <img className='absolute top-24' src={require('../../assets/image/imgBanner/slide3.png')} alt="..." />
            <img className={styles.imgComputer1} src={require('../../assets/image/imgBanner/computerIcon.png')} alt="..." />
            <img className={styles.imgComputer2} src={require('../../assets/image/imgBanner/computerIcon.png')} alt="..." />
            <img className={styles.imgComputer3} src={require('../../assets/image/imgBanner/computerIcon.png')} alt="..." />
          </Col>

        </Row>
      </div> */}
    </Slider>
  );
};

export default Carousel;
