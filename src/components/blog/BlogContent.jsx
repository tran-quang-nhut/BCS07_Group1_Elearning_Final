import { Col, Row } from 'antd'
import React from 'react'
import BlogItem from './BlogItem'
import hinh1Img from '../../assets/image/blog/10-bi-quyet-de-duy-tri-dong-luc-khi-hoc-code-11-610x342.jpg';
import htmlImg from '../../assets/image/blog/html.jpg';
import tailwindImg from '../../assets/image/blog/mqdefault.jpg';
import materialImg from '../../assets/image/blog/material.jpg';
import componentCreateImg from '../../assets/image/blog/how-to-create-react-component.jpg';
import asyncImg from '../../assets/image/blog/617946eca2bdf.jpg';
import typeScriptImg from '../../assets/image/blog/typescript.jpg';
import styles from './BlogContent.module.scss';
import clsx from 'clsx';
import { FaBullhorn } from 'react-icons/fa';

const BlogContent = (props) => {

    // nội dung tin tức
    const dataBlog = [
        {
            hinhAnh: hinh1Img,
            tieuDe: 'Thời gian và động lực',
            noiDung: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
            tacGia: ' Elon musk'
        },
        {
            hinhAnh: tailwindImg,
            tieuDe: 'Tailwind css và cách cài đặt cơ bản',
            noiDung: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
            tacGia: ' Ronaldo'
        },
        {
            hinhAnh: htmlImg,
            tieuDe: 'Cấu trúc cơ bản trong HTML',
            noiDung: 'Custom theme Material UI với TypeScript đơn giản, hiệu quả...',
            tacGia: ' Messi',
        },
        {
            hinhAnh: materialImg,
            tieuDe: 'Material UI custom theme với TypeScript',
            noiDung: 'Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...',
            tacGia: ' Neymar'
        },
        {
            hinhAnh: componentCreateImg,
            tieuDe: 'Cách tạo một component nhanh chóng chỉ bằng 3 ký tự',
            noiDung: 'Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...',
            tacGia: ' Haaland'
        },
        {
            hinhAnh: asyncImg,
            tieuDe: 'Xử lý bất đồng bộ trong Javascript (phần 2)',
            noiDung: 'Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...',
            tacGia: ' Mbbape'
        },
        {
            hinhAnh: typeScriptImg,
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            noiDung: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......',
            tacGia: ' Mane'
        },
        {
            hinhAnh: typeScriptImg,
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            noiDung: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......',
            tacGia: ' De Gea'
        },
    ]


    return (
        <div className='container mx-auto py-20'>
            <h1 className='ml-5 py-2 px-5 text-lg uppercase border-2 border-solid border-gray-400 rounded-[30px] inline-block mb-10 hover:border-gray-600 transition-all duration-300 cursor-pointer'><FaBullhorn className='text-pink-600 mr-3 text-xl inline-block' /> <span className='text-[16px] font-semibold'>Phù Hợp Với Bạn</span></h1>
            <Row>
                <Col xs={24} lg={17}>
                    <Row>
                        {dataBlog.map((ele, index) => (<BlogItem key={index} dataBlog={ele} />))}
                    </Row>
                </Col>
                <Col className='lg:px-2 mt-10 lg:mt-0 px-10' xs={24} lg={7}>
                    <Row>
                        <Col className='md:px-5 lg:px-0' span={24} md={12} lg={24} >
                            <div className={clsx(styles.blogCategory, 'border border-solid border-gray-400')}>
                                <h1 className='border-b border-solid border-gray-400 text-center text-lg font-semibold py-2'>Các chủ đề được đề xuất</h1>
                                <div className='px-5'>
                                    <ul className='text-lg font-medium text-gray-500'>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Front-end / Mobile apps</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>UI / UX / Design</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>BACK-END</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Thư viện</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Chia sẻ người trong nghề</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Châm ngôn IT</li>
                                        <li className='py-2 hover:pt-1 hover:pb-3 transition-all duration-300 cursor-pointer hover:text-teal-500'>Chủ đề khác</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className='md:px-5 lg:px-0' span={24} md={12} lg={24} >
                            <div className={clsx(styles.blogCategory, 'border border-solid border-gray-400 md:mt-0 mt-10 lg:mt-10')}>
                                <h1 className='border-b border-solid border-gray-400 text-center text-lg font-semibold py-2'>Bài đăng được đề xuất</h1>
                                <div className='px-5'>
                                    <div className={styles.blogComment}>
                                        <h3>Routing trong reactjs</h3>
                                        <p>
                                            Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                                        </p>
                                        <div className={styles.blogCommentImg}>
                                            <img src={require('../../assets/avatar/nguyenVan.jpg')} alt="..." />
                                            <span className='ml-3'>Trần Quang Nhựt</span>
                                        </div>
                                    </div>

                                    <div className={styles.blogComment}>
                                        <h3>Lập trình hướng đối tượng oop</h3>
                                        <p>
                                            Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...
                                        </p>
                                        <div className={styles.blogCommentImg}>
                                            <img src={require('../../assets/avatar/instrutor12.90a80820.jpg')} alt="..." />
                                            <span className='ml-3'>Phạm Tiến Đạt</span>
                                        </div>
                                    </div>

                                    <div className={styles.blogComment}>
                                        <h3>Xử Lý Bất Đồng Bộ Trong Javascript</h3>
                                        <p>
                                            Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...
                                        </p>
                                        <div className={styles.blogCommentImg}>
                                            <img src={require('../../assets/avatar/dadMoon.jpg')} alt="..." />
                                            <span className='ml-3'> Nguyễn Ngọc Minh Quí</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}

export default BlogContent