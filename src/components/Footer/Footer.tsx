/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.scss';
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { congthuong } from '../../constants/Constants';
import logothongbao from '../../assets/images/dathongbao.webp'


const Footer = () => {
    return (
        <footer className='footer mt-5 bg-[#000000]'>
            <div className='container-footer container mx-auto w-[1170px] flex flex-wrap py-20 justify-center  content-center'>
                <div className='sm:w-1/1 md:w-1/2 lg:w-1/4'>
                    <h4 className='title-footer'>Về DEGREY</h4>
                    <p className='pt-5'>
                        Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u buồn về sự nghiệp,
                        tương lai trong quá khứ của chính mình” theo lời chia sẻ của Degreys founder.
                    </p>
                    <div className='pt-4'>
                        <h5 className='font-semibold'>CÔNG TY TNHH DEGREY</h5>
                        <p>
                            0315986019 0315986019 cấp ngày 31/10/2019 tại Sở kế hoạch đầu tư TPHCM
                        </p>
                    </div>
                    <a href={congthuong} target="_blank" className='mt-4 block' rel="noreferrer">
                        <img className='w-[150px] h-[57px]' src={logothongbao} alt="" />
                    </a>
                </div>
                <div className='sm:w-1/1 sm:pl-0 md:w-1/2 lg:w-1/4 pt-12'>
                    <p className='font-bold'>Địa chỉ</p>
                    <p className='font-bold pt-7'>Sài Gòn:</p>
                    <p>
                        43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận
                        1041 Luỹ Bán Bích P.Tân Thành Q.Tân Phú
                    </p>
                    <p className='pt-4'>
                        <span className='font-bold'>Điện thoại:</span> 0336311117
                    </p>
                    <p className='pt-4'>
                        <span className='font-bold'>Email:</span> degrey.vn@gmail.com
                    </p>
                </div>
                <div className='sm:w-1/1  md:w-1/2 lg:w-1/4 pl-10'>
                    <h4 className='title-footer'>Hỗ trợ khách hàng</h4>
                    <ul className='pt-5 leading-8'>
                        <li><a >Giới thiệu Degrey</a></li>
                        <li><a >Hệ thống cửa hàng</a></li>
                        <li><a >Hướng dẫn đặt hàng</a></li>
                        <li><a >Chính sách và quy định</a></li>
                        <li><a >Chính sách bảo mật</a></li>
                        <li><a >Thông tin sở hửu</a></li>
                    </ul>
                </div>
                <div className='sm:w-1/1 sm:pl-10 md:w-1/2  lg:w-1/4'>
                    <h4 className='title-footer'>Chăm sóc khách hàng</h4>
                    <div className='flex flex-wrap pt-5'>
                        <FiPhoneCall className=' h-[30px] w-[30px] text-[#9B9B9B] mt-4' />
                        <p className='text-[#9B9B9B] text-[26px] font-semibold pl-5'>0336311117</p>
                        <p className='pl-11 underline'>degrey.vn@gmail.com</p>
                    </div>
                    <div>
                        <p className='title-footer pt-7'>Follow Us</p>
                    </div>
                    <div className='flex gap-3 mt-5 cursor-pointer' >
                        <FaFacebookSquare className='bg-white text-[30px]' />
                        <FaInstagramSquare className='bg-white text-[30px]' />
                        <FaTwitterSquare className='bg-white text-[30px]' />
                    </div>
                </div>
            </div>
            <p className='justify-center flex text-[#9B9B9B]'>Copyright 2023 DEGREY VIETNAM. by BUITANDAT</p>
        </footer>
    );
};

export default Footer;