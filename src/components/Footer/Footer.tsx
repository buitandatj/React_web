import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { congthuong } from '../../constants/MediaLink';
import logothongbao from '../../assets/images/dathongbao.webp'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-footer'>
                <div className=' sm:w-1/1 md:w-1/2 lg:w-1/4 col-11'>
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
                <div className='sm:w-1/1 sm:pl-10 md:w-1/2 lg:w-1/4 pt-12 col-11'>
                    <p className='font-bold pt-2'>Địa chỉ</p>
                    <p className='font-bold pt-2'>Sài Gòn:</p>
                    <li className="address">
                        43 Huỳnh Văn Bánh P.17 Q.Phú Nhuận
                    </li>
                    <li className="address">
                        1041 Luỹ Bán Bích P.Tân Thành Q.Tân Phú
                    </li>
                    <p className='pt-4'>
                        <span className='font-bold'>Điện thoại:</span> 0336311117
                    </p>
                    <p className='pt-4'>
                        <span className='font-bold'>Email:</span> degrey.vn@gmail.com
                    </p>
                </div>
                <div className='box-footer sm:w-1/1  md:w-1/2 lg:w-1/4 pl-10 col-11'>
                    <h4 className='title-footer'>Hỗ trợ khách hàng</h4>
                    <ul className='pt-5 leading-8'>
                        <li>Giới thiệu Degrey</li>
                        <li>Hệ thống cửa hàng</li>
                        <li>Hướng dẫn đặt hàng</li>
                        <li>Chính sách và quy định</li>
                        <li>Chính sách bảo mật</li>
                        <li>Thông tin sở hửu</li>
                    </ul>
                </div>
                <div className='box-footer sm:w-1/1 sm:pl-10 md:w-1/2  lg:w-1/4 col-11'>
                    <h4 className='title-footer'>Chăm sóc khách hàng</h4>
                    <div className='flex flex-wrap pt-5'>
                        <div className="flex items-center ">
                            <FiPhoneCall className=' h-[20px] w-[20px] text-[#9B9B9B]' />
                            <p className='text-[#9B9B9B] text-[26px] font-semibold pl-5'>0336311117</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <AiOutlineMail className=' h-[20px] w-[20px] text-[#9B9B9B]'/>
                            <p className='pl-5 underline'>degrey.vn@gmail.com</p>
                        </div>

                    </div>
                    <div>
                        <p className='title-footer mt-10'>Follow Us</p>
                    </div>
                    <div className='flex gap-3 mt-4 cursor-pointer' >
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