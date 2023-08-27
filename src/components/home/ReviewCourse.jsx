import { Col, Row } from 'antd'
import clsx from 'clsx';
import React from 'react';
import styles from './ReviewCourse.module.scss'

const ReviewCourse = () => {
    return (
        <div className='container mx-auto pb-14 pt-5  lg:pt-14'>
            <Row>
                <Col xs={24} lg={12}>
                    <div className={styles.reviewItem}>
                        <div className={styles.reviewImg}>
                            <img src={require('../../assets/avatar/avatarReview.2f5a1f3c.png')} alt="..." />
                        </div>
                        <div className={styles.triangleBox}></div>
                        <div className={styles.dot1Box}></div>
                        <div className={styles.dot2Box}></div>
                    </div>
                </Col>

                <Col className={clsx(styles.reviewItem, 'mt-5 lg:mt-0')} xs={24} lg={12}>
                    <div>
                        <blockquote>
                            <q>
                                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                            </q>
                        </blockquote>

                        <p className={styles.reviewName}>Nhi Dev</p>
                        <p>Học viên xuất sắc</p>

                        <div className={styles.dot3Box}></div>
                        <div className={styles.dot4Box}></div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default ReviewCourse