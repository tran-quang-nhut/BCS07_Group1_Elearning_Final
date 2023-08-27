import clsx from 'clsx';
import React from 'react'
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Admin.module.scss';
import { isLoadingAction } from '../../../redux/action/userAction';
import adminService from '../../../services/adminSevice';
import userServices from '../../../services/userService';
import formData from '../../../utils/formData';
import statusCode from '../../../utils/statusCode';
import { Table } from 'antd';

const ApprovedCourse = (props) => {

    const [approvedCourse, setApprovedCourse] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();

    const fetchApiApprovedCourse = async () => {
        try {
            dispatch(isLoadingAction(true));
            const res = await adminService.fetchApiApprovedCourseList(params.account);
            if(res.status === statusCode.SUCCESS) {
                setApprovedCourse(res.data);
            }
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(isLoadingAction(false));
        };
    };

    useEffect(() => {
      
        fetchApiApprovedCourse();

    }, [params.account])


    // hủy đăng ký khóa học
    const handleUnsubscribe = async (khoaHoc) => {
        try {

            const newData = formData.dataUnsubscribeCourse(khoaHoc, params.account);
            const res = await userServices.fetchApiUnsubscribeCourse(newData);

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data,
                showConfirmButton: false,
                timer: 1500
            });
            fetchApiApprovedCourse();
        } catch (err) {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data,
                showConfirmButton: false,
                timer: 1500
            });
        }; 
    };

    
    // data table
    const data = approvedCourse;

    const columns = [
        {
            title: 'Tên Khóa Học',
            dataIndex: 'tenKhoaHoc',
            key: '1',
            sorter: (a, b) => {
                let tenA = a.tenKhoaHoc.toLowerCase().trim();
                let tenB = b.tenKhoaHoc.toLowerCase().trim();
                if (tenA > tenB) {
                    return 1
                } else {
                    return -1;
                }
            },
            render: (text, course) => {
                return <Fragment>
                    <h4 className={clsx(styles.gradientText, 'font-medium text-lg')}>{course.tenKhoaHoc}</h4>
                </Fragment>
            },
            sortDirection: ['descend', 'ascend'],
            width: '25%',
        },
        {
            title: 'Mã Khóa Học',
            key: '2',
            dataIndex: 'maKhoaHoc',
            width: '25%',
            render: (text, user, index) => {
                return <Fragment>
                    <p>{user.maKhoaHoc}</p>
                </Fragment>
            },

        },
        
        {
            title: 'Tác Vụ',
            key: '6',
            dataIndex: 'taiKhoan',
            width: '25%',
            render: (text, user, index) => {
                return <Fragment>
                    <button onClick={() => handleUnsubscribe(user.maKhoaHoc)} className={styles.btnGradient}>Hủy Đăng Khóa Học</button>
                </Fragment>
            }
        },

    ];


  return (
    <div>
            <div className="flex justify-between mb-5 md:mb-10" >
                <h3 className='text-teal-600 text-xl font-semibold'>Quản Lý Học Đã Xét Duyệt</h3>
            </div>
            <Table rowKey={'taiKhoan'} columns={columns} dataSource={data} />
        </div>
  )
}

export default ApprovedCourse