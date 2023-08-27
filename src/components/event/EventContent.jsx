import { Col, Row } from 'antd'
import clsx from 'clsx';
import React from 'react';
import styles from './EventContent.module.scss';
import Producer from './Producer';
import Sponsors from './Sponsors';

const EventContent = () => {
    return (
        <div className={styles.eventContent}>
            <div className="container py-20">
                <Row>
                    <Col className={styles.eventImg} xs={24} lg={12}>
                        <img src={require('../../assets/image/event/it.ef68b551.png')} alt="" />
                    </Col>
                    <Col className={clsx(styles.eventItemText, 'px-10 lg:px-0')} xs={24} lg={12}>
                        <h1>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h1>
                        <h4>Nơi gặp gỡ của những tư tưởng lớn</h4>
                        <p>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
                        <div className={styles.eventBtn}>
                            <button>THAM GIA</button>
                            <button>TÌM HIỂU THÊM</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Producer />
            <Sponsors />
        </div>
    )
}

export default EventContent