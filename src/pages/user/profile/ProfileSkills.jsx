
import { Col, Row } from 'antd';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Profile.module.scss';
import { FaBook, FaGraduationCap, FaLayerGroup, FaSignal, FaSwatchbook, FaUserClock } from "react-icons/fa";

const ProfileSkills = () => {
    const [value, setValue] = useState({ skill: 'HTML5', value: 60, color: 'red' });
    let skill = useRef(null)

    const handleClickToView = () => skill.current.scrollIntoView({ behavior: 'smooth' });
    return (
        <div className='border border-solid border-teal-500 mt-10'>
            <h1 ref={skill} className='py-3 text-center mb-5 text-lg lg:text-2xl font-bold bg-teal-500 text-white w-full'>Kỹ Năng Của Tôi</h1>
            <div  className='px-5 mt-10'>

                <Row >
                    <Col className='px-2 flex flex-col justify-center items-center' xs={24} lg={6}>
                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaUserClock className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Giờ Học</h3>
                                <p className='text-lg font-medium'>80</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaSwatchbook className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Buổi Học</h3>
                                <p className='text-lg font-medium'>40</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaGraduationCap className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Học Lực</h3>
                                <p className='text-lg font-medium'>Giỏi</p>
                            </div>
                        </div>

                    </Col>
                    <Col className='px-5' xs={24} lg={12}>
                        <div className='py-10 px-16 shadow-lg flex flex-col justify-center items-center'>
                            <div className='w-40 h-40'>
                                <CircularProgressbar value={value.value} maxValue={100} text={`${value.value}%`}
                                    styles={buildStyles({
                                        textColor: "black",
                                        pathColor: `${value.color}`,
                                        trailColor: "gainsboro",
                                    })}
                                />
                            </div>
                            <h1 className=' mt-3 font-medium text-xl'>{value.skill}</h1>
                        </div>
                        <p className='mt-3 px-2'>Học tập thật nhiều để hoàn thiện kỹ năng lập trình của bạn !!!</p>
                    </Col>
                    <Col className='px-2 flex flex-col justify-center items-center' xs={24} lg={6}>
                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaLayerGroup className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Điểm Tổng</h3>
                                <p className='text-lg font-medium'>80 điểm</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaSignal className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Cấp Độ</h3>
                                <p className='text-lg font-medium'>Trung Cấp</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center text-white w-40  h-20 bg-green-600 rounded-lg my-3'>
                            <FaBook className='text-3xl' />
                            <div className='ml-5'>
                                <h3 className='text-lg font-semibold'>Bài Tập</h3>
                                <p className='text-lg font-medium'>100</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-10 mb-5'>
                    <Col xs={12} md={8} lg={5} className='py-3 lg:py-0 lg:text-center'>
                        <button
                            onClick={() => {
                                setValue({ ...value, skill: 'HTML5', value: 60, color: 'red' });
                                handleClickToView();
                            }}
                            className={clsx(styles.btnEditProfile, 'mx-2')}>HTML5</button>
                    </Col>

                    <Col className='py-3 lg:py-0 lg:text-center' xs={12} md={8} lg={4}>
                        <button
                            onClick={() => {
                                handleClickToView();
                                setValue({ ...value, skill: 'CSS3', value: 95, color: 'green' });
                            }}
                            className={clsx(styles.btnEditProfile, 'mx-2')}>CSS3</button>
                    </Col>

                    <Col className='py-3 lg:py-0 lg:text-center' xs={12} md={8} lg={6}>
                        <button
                            onClick={() => {
                                handleClickToView();
                                setValue({ ...value, skill: 'JavaScript', value: 85, color: 'yellow' });
                            }}
                            className={clsx(styles.btnEditProfile, 'mx-2')}>JavaScript</button>
                    </Col>

                    <Col className='py-3 lg:py-0 lg:text-center' xs={12} md={8} lg={5}>
                        <button
                            onClick={() => {
                                handleClickToView();
                                setValue({ ...value, skill: 'React JS', value: 100, color: 'teal' });
                            }}
                            className={clsx(styles.btnEditProfile, 'mx-2')}>ReactJs</button>
                    </Col>

                    <Col className='py-3 lg:py-0' xs={12} md={8} lg={4}>
                        <button
                            onClick={() => {
                                handleClickToView();
                                setValue({ ...value, skill: 'JAVA', value: 50, color: 'purple' });
                            }}
                            className={clsx(styles.btnEditProfile, 'mx-2')}>JAVA</button>
                    </Col>





                </Row>
            </div>
        </div>
    )
}

export default ProfileSkills;