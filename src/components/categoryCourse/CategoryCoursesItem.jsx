import React, { useState } from 'react'
import { Col, Pagination, Row } from 'antd';
import { truncateText } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../home/PopularCourses.module.scss';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { FaSignal, FaTag } from 'react-icons/fa';

const CategoryCoursesItem = () => {

    const navigate = useNavigate();

    //lấy danh sách khóa học theo danh mục
    const { categoryCourse } = useSelector(state => state.courseList);


    // useState pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [coursePerPage] = useState(12);
    const lastIndex = currentPage * coursePerPage;
    const firstIndex = lastIndex - coursePerPage;
    let dataMap;
    if (categoryCourse.length > 12) {
        dataMap = categoryCourse.slice(firstIndex, lastIndex);
    } else {
        dataMap = categoryCourse;
    }


    // chuyển sang trang chi tiết
    const handleFetchDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    // onchange call api khi click phân trang
    const handleGetPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div>
            <Row>
                {
                    dataMap.map((ele, index) => {
                        return (
                            <Col xs={24} md={12} lg={6} key={index} className={styles.itemsCard}>
                                <div className={styles.items}>
                                    <div className={styles.itemImg}>
                                        <span>Yêu Thích</span>
                                        <div className={styles.divImg}>
                                            <img src={ele.hinhAnh} alt="..." />
                                        </div>
                                        <h1>{ele.tenKhoaHoc}</h1>
                                    </div>
                                    <div className='px-5 mt-5'>
                                        <h3 onClick={() => handleFetchDetail(ele.maKhoaHoc)} className='h-14 bg-white overflow-hidden text-lg font-medium mt-2 cursor-pointer hover:text-teal-500 transition-all duration-300'>
                                            {truncateText(ele.moTa, 45)}
                                        </h3>
                                        <div className='flex justify-around text-lg font-medium text-gray-500 mt-3'>
                                            <div className='flex items-center'>
                                                <FieldTimeOutlined className='mr-1 text-green-600' />
                                                <span>32 Giờ</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <CalendarOutlined className='mr-1 text-red-600' />
                                                <span>12 Tuần</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaSignal className='mr-1 text-teal-600' />
                                                <span>Tất Cả</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-around py-3 border-t border-solid border-gray-300 mt-6'>
                                        <div className='flex items-center '>
                                            <div className={styles.avatarAdmin}>
                                                <img src={require('../../assets/avatar/avatar2.bb9626e2.png')} alt="..." />
                                            </div>
                                            <h3 className='text-lg text-gray-500 ml-2 font-medium'>Ronaldo</h3>
                                        </div>
                                        <div>
                                            <p className='decoration-slice line-through text-gray-500'>900.000 <sup>đ</sup></p>
                                            <p className='text-teal-600 text-lg font-medium'>600.000 <sup>đ</sup> <FaTag className='text-red-500 inline-block' /></p>
                                        </div>
                                    </div>

                                    <div className={index % 2 === 0 ? styles.hoverLeftSide : styles.hoverRightSide}>
                                        <div className='flex items-center mt-3'>
                                            <img width={60} src={require('../../assets/avatar/emoji.6d1b7051.png')} alt="..." />
                                            <h3 className='ml-3 text-lg font-medium text-gray-500'>Ronaldo</h3>
                                        </div>
                                        <h1 className={styles.CourseName}>
                                            {ele.tenKhoaHoc}
                                        </h1>
                                        <p className={styles.text}>
                                            {truncateText(ele.moTa, 200)}
                                        </p>
                                        <div className='flex justify-around text-lg font-medium text-gray-500 mt-3'>
                                            <div className='flex items-center'>
                                                <FieldTimeOutlined className='mr-1 text-green-600' />
                                                <span>8 Giờ</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <CalendarOutlined className='mr-1 text-red-600' />
                                                <span>8 Tuần</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaSignal className='mr-1 text-teal-600' />
                                                <span>Tất Cả</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleFetchDetail(ele.maKhoaHoc)}
                                            className={styles.btnDetail}> Xem Chi Tiết
                                        </button>
                                    </div>

                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
            {categoryCourse.length > 12 && <div className='text-center mt-3'>
                <Pagination onChange={handleGetPage} defaultCurrent={1} pageSize={12} total={categoryCourse.length + 1} showSizeChanger={false} />
            </div>}

        </div>
    )
}

export default CategoryCoursesItem