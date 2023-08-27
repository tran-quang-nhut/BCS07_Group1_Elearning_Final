import { Col, Row } from 'antd'
import React from 'react';
import styles from './Sponsors.module.scss'

const Sponsors = () => {
  return (
    <div className='container mx-auto py-20'>
        <h1 className='text-center font-bold text-yellow-500 text-3xl mb-5'>NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h1>
        <Row>
            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/image/event/meta.10fa2fa1.jpg')} alt="..." />
                <h2>FACEBOOK</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/image/event/microsoft.318b3280.jpg')} alt="..." />
                <h2>MICROSOFT</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/image/event/Google-logo.f11902b5.jpg')} alt="..." />
                <h2>GOOGLE</h2>
            </Col>

            <Col className={styles.sponsorsItem} xs={24} md={12} lg={6}>
                <img src={require('../../assets/image/event/amazon.996890c4.jpg')} alt="..." />
                <h2>AMAZON</h2>
            </Col>
        </Row>
    </div>
  )
}

export default Sponsors