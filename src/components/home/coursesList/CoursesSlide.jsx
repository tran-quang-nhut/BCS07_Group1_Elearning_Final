import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { FaSignal, FaTag } from "react-icons/fa";
import styles from "./CourseSlide.module.scss";
import { truncateText } from "../../../utils/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//component custom for next button slcik
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="customNext"
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
      className="customPrev"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsChevronCompactLeft />
    </div>
  );
}

const CoursesSlide = (props) => {
  const { courseLoading } = useSelector((state) => state.courseList);
  const navigate = useNavigate();

  // cau hinh cho slick carousel
  let settingsCarouser = {
    dots: false,
    infinite: true,
    rows: 1,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // chuyển sang trang chi tiết
  const handleFetchDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      {!courseLoading && (
        <Slider {...settingsCarouser} className="my-5">
          {props.item?.map((ele, index) => {
            return (
              <div key={index} className={styles.coursesCard}>
                <div className={styles.coursesItem}>
                  <div className={styles.coursesImg}>
                    <div className={styles.objImg}>
                      <img src={ele.hinhAnh} alt="..." />
                    </div>
                    <h1>{ele.tenKhoaHoc}</h1>
                  </div>
                  <div className="px-5 mt-5">
                    <h3 className="h-14 bg-white overflow-hidden text-lg font-medium mt-2 cursor-pointer hover:text-teal-500 transition-all duration-300">
                      {truncateText(ele.moTa, 45)}
                    </h3>
                    <div className="flex justify-around text-lg font-medium text-gray-500 mt-3">
                      <div className={styles.info}>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <FieldTimeOutlined className="mr-1 text-green-600" />
                            <span>6 Giờ</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <CalendarOutlined className="mr-1 text-red-600" />
                            <span>8 Tuần</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <FaSignal className="mr-1 text-teal-600" />
                            <span>Tất Cả</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.footerItem}>
                    <div className="flex items-center justify-around py-3 border-t border-solid border-gray-300 mt-6">
                      <div className="flex items-center ">
                        <div className={styles.avatarTeacher}>
                          <img
                            src={require("../../../assets/avatar/avatar2.bb9626e2.png")}
                            alt="..."
                          />
                        </div>
                        <h3 className="text-lg text-gray-500 ml-2 font-medium">
                          Ronaldo
                        </h3>
                      </div>
                      <div>
                        <p className="decoration-slice line-through text-gray-500">
                          900.000 <sup>đ</sup>
                        </p>
                        <p className="text-teal-600 text-lg font-medium">
                          600.000 <sup>đ</sup>{" "}
                          <FaTag className="text-red-500 inline-block" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.hoverLeft}>
                    <div className="flex items-center">
                      <img
                        width={60}
                        src={require("../../../assets/avatar/emoji.6d1b7051.png")}
                        alt="..."
                      />
                      <h3 className="ml-3 text-lg font-medium text-gray-500">
                        Ronaldo
                      </h3>
                    </div>
                    <h1 className={styles.hoverCourseName}>
                      {truncateText(ele.tenKhoaHoc, 25)}
                    </h1>
                    <p className={styles.textHover}>
                      {truncateText(ele.moTa, 120)}
                    </p>
                    <div className="flex justify-around text-lg font-medium text-gray-500 mt-3">
                      <div className={styles.info}>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <FieldTimeOutlined className="mr-1 text-green-600" />
                            <span>8 Giờ</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <CalendarOutlined className="mr-1 text-red-600" />
                            <span>8 Tuần</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={styles.infoItem}>
                            <FaSignal className="mr-1 text-teal-600" />
                            <span>Tất Cả</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleFetchDetail(ele.maKhoaHoc)}
                      className={styles.btnText}
                    >
                      {" "}
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {courseLoading && (
        <div className="w-full h-64 top-0 left-0 bg-white text-center flex items-center justify-center">
          <img
            className=""
            src={require("../../../assets/loading/Spinner-3.gif")}
            alt="..."
          />
        </div>
      )}
    </div>
  );
};

export default CoursesSlide;
