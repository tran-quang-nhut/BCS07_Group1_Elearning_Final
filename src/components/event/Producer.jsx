import { Col, Row } from 'antd'
import React from 'react';
import styles from './Producer.module.scss';

const Producer = () => {
    return (
        <div className={styles.producer}>
            <div className='container mx-auto'>
                <h1 className='text-center font-bold text-yellow-500 text-3xl mb-2'>CÁC NHÀ ĐỒNG SÁNG TẠO</h1>
                <Row>
                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/dadMoon.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>TRẦN QUANG NHỰT</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/menBor.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>PHẠM TIẾN ĐẠT</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/Slaham.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NGUYỄN NGỌC MINH QUÍ</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/andersan.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>JHONNY ĐẶNG</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/gadi.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>Lionel Messi</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/hoangNam.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NEYMAR</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/savani.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>ROBER IMACU</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/instrutor12.90a80820.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>Cristiano Ronaldo</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Producer