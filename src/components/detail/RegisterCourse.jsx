import React from 'react';
import styles from './RegisterCourse.module.scss';
import { FaBolt, FaBook, FaDatabase, FaPhotoVideo, FaRegClock, FaUserGraduate } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import formData from '../../utils/formData';
import userServices from '../../services/userService';
import { defaultTabActiveKeyAction, fetApiProfileAction } from '../../redux/action/userAction';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterCourse = (props) => {
    // lay thong tin tai khoan tu global state
    const { profile } = useSelector(state => state.userSlice);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { detailCourse } = useSelector(state => state.courseList);

    //dang ky khoa hoc
    const handleRegisterCourse = async (data) => {
        
        try {
            const res = await userServices.fetchApiRegisterCourse(data);
            await dispatch(fetApiProfileAction);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data,
                showConfirmButton: false,
                timer: 1500
            }).then(result => {
                dispatch(defaultTabActiveKeyAction('2'));
                navigate('/profile');
            })

        } catch (err) {
            Swal.fire({
                position: 'top center',
                icon: 'error',
                title: `${err.response.data}`,
                showConfirmButton: false,
                timer: 1500
            });
        };
    };

    return (
        <div className={styles.registerCourse}>

            <img className='w-full block' src={detailCourse?.hinhAnh} alt="...." />

            <div className='px-5'>
                <p className='text-2xl font-bold text-red-700 flex items-center justify-end py-8'><FaBolt className='text-yellow-500 inline-block mr-2' /> <span>600.000</span> <sup>đ</sup></p>

                <button
                    onClick={() => {
                        if(!profile) return navigate('/user/login')
                        const maKH = detailCourse.maKhoaHoc;
                        const TK = profile.taiKhoan;
                        handleRegisterCourse(formData.dataRegisterCourse(maKH, TK))
                    }}
                    className={styles.btnRegisterCourse}>
                    <span>Đăng Ký</span>
                </button>

                <div className='flex justify-between items-center border-b border-solid border-gray-300 py-5'>
                    <p className='text-[1rem] text-gray-500'>Ghi danh: <span className='text-black font-medium ml-1'>{props.detailStudent?.lstHocVien.length} Học Viên</span></p>
                    <FaUserGraduate className='text-2xl text-yellow-500' />
                </div>

                <div className='flex justify-between items-center border-b border-solid border-gray-300 py-5'>
                    <p className='text-[1rem] text-gray-500'>Thời gian: <span className='text-black font-medium ml-1'>18 Giờ</span></p>
                    <FaRegClock className='text-2xl text-yellow-500' />
                </div>

                <div className='flex justify-between items-center border-b border-solid border-gray-300 py-5'>
                    <p className='text-[1rem] text-gray-500'>Bài học: <span className='text-black font-medium ml-1'>10</span></p>
                    <FaBook className='text-2xl text-yellow-500' />
                </div>

                <div className='flex justify-between items-center border-b border-solid border-gray-300 py-5'>
                    <p className='text-[1rem] text-gray-500'>Video: <span className='text-black font-medium ml-1'>14</span></p>
                    <FaPhotoVideo className='text-2xl text-yellow-500' />
                </div>

                <div className='flex justify-between items-center border-b border-solid border-gray-300 py-5'>
                    <p className='text-[1rem] text-gray-500'>Trình độ: <span className='text-black font-medium ml-1'>Người mới bắt đầu</span></p>
                    <FaDatabase className='text-2xl text-yellow-500' />
                </div>

                <div className='py-7'>
                    <input className='w-full border border-solid border-teal-500 px-3 py-2 focus:outline-teal-500 rounded-md focus:rounded-sm' type="text" placeholder='Nhập Mã' />
                </div>
            </div>

        </div>
    )
}

export default RegisterCourse