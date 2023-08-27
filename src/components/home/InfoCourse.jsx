import { Col, Row } from 'antd'
import clsx from 'clsx';
import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import styles from './InfoCourse.module.scss';


const InfoCourse = () => {

    return (
        <div className='container mx-auto px-5 py-3 lg:py-10 lg:px-0'>
            <Row>
                <Col className='p-2' xs={24} lg={8} >
                    <div className={clsx(styles.boxCourse, 'bg-teal-600 text-white p-5 lg:h-99 z-10')}>
                        <h1 className='text-2xl font-semibold mb-3 uppercase'>Khóa Học</h1>
                        <p className='lg:text-lg text-justify'><b>Học qua dự án thực tế</b>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                        <ul className='lg:text-lg mt-5'>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Hơn 1000 bài tập và dự án thực tế</li>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Công nghệ cập nhật mới nhất</li>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Hình ảnh, ví dụ, bài giảng sinh động trực quan</li>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Tư duy phân tích, giải quyết vấn đề trong dự án</li>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</li>
                            <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</li>
                        </ul>
                        <img className='w-36 absolute bottom-1 right-3 -z-10' src={require('../../assets/image/imgBanner/astronaut.3c90d598.png')} alt="..." />
                    </div>
                </Col>

                <Col xs={24} lg={16} >
                    <Row>
                        <Col className='p-2' xs={24} lg={12} >
                            <div className={clsx('bg-green-500 text-white p-5 lg:h-72', styles.boxCourse)}>
                                <h1 className='text-2xl font-semibold mb-3 uppercase'>Lộ Trình Phù Hợp</h1>
                                <ul className='lg:text-lg'>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Học, luyện tập code, kỹ thuật phân tích, soft skill</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Huấn luyện để phát triển năng lực và niềm đam mê lập trình</li>

                                </ul>
                            </div>
                        </Col>

                        <Col className=' p-2' xs={24} lg={12} >
                            <div className={clsx('bg-gray-500 text-white p-5 lg:h-72', styles.boxCourse)}>
                                <h2 className='text-2xl font-semibold mb-3 uppercase'>HỆ THỐNG HỌC TẬP</h2>
                                <ul className='lg:text-lg'>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</li>

                                </ul>
                            </div>
                        </Col>

                        <Col className='p-2' xs={24} lg={12} >
                            <div className={clsx('bg-yellow-500 text-white p-5 lg:h-72', styles.boxCourse)}>
                                <h1 className='text-2xl font-semibold mb-3 uppercase'>GIẢNG VIÊN</h1>
                                <ul className='lg:text-lg'>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Tương tác cùng mentor và giảng viên qua phần thảo luận</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Review code và đưa ra các nhận xét góp ý</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Chấm điểm tương tác thảo luận giữa các học viên</li>

                                </ul>
                            </div>
                        </Col>

                        <Col className='p-2' xs={24} lg={12} >
                            <div className={clsx('bg-teal-500 text-white p-5 lg:h-72', styles.boxCourse)}>
                                <h1 className='text-2xl font-semibold mb-3 uppercase'>CHỨNG NHẬN</h1>
                                <ul className='lg:text-lg'>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Chấm bài và có thể vấn đáp trực tuyến để review</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</li>
                                    <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Kết nối CV của bạn đến với các đối tác của E learning</li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default InfoCourse