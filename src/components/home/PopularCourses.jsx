import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Col, Pagination, Row } from "antd";
import React, { useEffect } from "react";
import { FaSignal, FaTag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchApiPopularCoursesAction } from "../../redux/action/courseListAction";
import { truncateText } from "../../utils/index";
import styles from "./PopularCourses.module.scss";

const PopularCourses = () => {
  const dispatch = useDispatch();
  const { popularCourses } = useSelector((state) => state.courseList);
  const { popularCourseLoading } = useSelector((state) => state.courseList);
  const navigate = useNavigate();

  // call api lấy danh sách khóa học phân trang
  useEffect(() => {
    dispatch(fetchApiPopularCoursesAction());
  }, []);

  // onchange call api khi click phân trang
  const handleGetPage = (page) => {
    dispatch(fetchApiPopularCoursesAction(page));
  };

  // chuyển sang trang chi tiết
  const handleFetchDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <Row>
        {!popularCourseLoading &&
          popularCourses?.items.map((ele, index) => {
            return (
              <Col
                xs={24}
                sm={12}
                lg={8}
                xl={6}
                key={index}
                className={styles.itemsCard}
              >
                <div className={styles.items}>
                  <div className={styles.itemImg}>
                    <span>Yêu Thích</span>
                    <div className={styles.divImg}>
                      <img src={ele.hinhAnh} alt="..." />
                    </div>
                    <h1>{ele.tenKhoaHoc}</h1>
                  </div>
                  <div className="px-2 mt-5">
                    <h3
                      onClick={() => handleFetchDetail(ele.maKhoaHoc)}
                      className="h-14 bg-white overflow-hidden text-lg font-medium mt-2 cursor-pointer hover:text-teal-500 transition-all duration-300"
                    >
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
                        <div className={styles.avatarAdmin}>
                          <img
                            src={require("../../assets/avatar/avatar2.bb9626e2.png")}
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

                  <div
                    className={
                      index % 2 === 0
                        ? styles.hoverLeftSide
                        : styles.hoverRightSide
                    }
                  >
                    <div className="flex items-center mt-3">
                      <img
                        width={60}
                        src={require("../../assets/avatar/emoji.6d1b7051.png")}
                        alt="..."
                      />
                      <h3 className="ml-3 text-lg font-medium text-gray-500">
                        Ronaldo
                      </h3>
                    </div>
                    <h1 className={styles.CourseName}>{ele.tenKhoaHoc}</h1>
                    <p className={styles.text}>{truncateText(ele.moTa, 200)}</p>
                    <div className=" flex justify-around text-lg font-medium text-gray-500 mt-3">
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
                      className={styles.btnDetail}
                    >
                      {" "}
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}

        {popularCourseLoading && (
          <div className="w-full h-64 top-0 left-0 bg-white text-center flex items-center justify-center">
            <img
              className=""
              src={require("../../assets/loading/Spinner-3.gif")}
              alt="..."
            />
          </div>
        )}
      </Row>

      <div className="text-center mt-3">
        <Pagination
          onChange={handleGetPage}
          current={popularCourses?.currentPage}
          defaultCurrent={1}
          total={popularCourses?.totalCount}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default PopularCourses;
