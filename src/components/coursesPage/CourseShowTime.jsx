import { Col, Row } from 'antd';
import React from 'react';
import { FaBook, FaBriefcase, FaCamera, FaConnectdevelop, FaLaptopCode, FaVideo } from 'react-icons/fa';

const CourseShowTime = () => {
    return (
        <Row className='flex items-center justify-center my-10 lg:my-20 px-5 lg:px-0'>
            <Col span={12} md={8} lg={4} className='bg-slate-700 text-white text-center h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>Chương Trình Học</h1>
                <FaLaptopCode className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>30</p>
            </Col>

            <Col span={12} md={8} lg={4} className='bg-teal-500 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>Nhà Sáng Tạo</h1>
                <FaCamera className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>10000</p>
            </Col>

            <Col span={12} md={8} lg={4} className='bg-orange-300 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>Nhà Thiế Kế</h1>
                <FaBriefcase className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>400</p>
            </Col>

            <Col span={12} md={8} lg={4} className='bg-orange-400 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>Bài Giảng</h1>
                <FaBook className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>3000</p>
            </Col>

            <Col span={12} md={8} lg={4} className='bg-rose-400 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>VIDEO</h1>
                <FaVideo className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>4000</p>
            </Col>

            <Col span={12} md={8} lg={4} className='bg-rose-500 text-white text-center w-56 h-40 flex flex-col justify-center items-center w-52'>
                <h1 className='text-[20px] font-[500]'>Lĩnh Vực</h1>
                <FaConnectdevelop className='text-4xl mt-2' />
                <p className='mt-3 text-[22px]'>200</p>
            </Col>

        </Row>
    )
}

export default CourseShowTime