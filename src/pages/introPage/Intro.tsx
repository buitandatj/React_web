import React from 'react';
import './style.scss';
import ListPage from '../../components/listPage/ListPage';
import img from '../../assets/images/img-intro.webp';
import img2 from '../../assets/images/img-intro-2.webp';
import img3 from '../../assets/images/img-intro-3.webp';
import img4 from '../../assets/images/img-intro-4.webp';
import img5 from '../../assets/images/img-intro-5.webp';
const IntroImg = [
    {
        id: 1,
        img: img,
        title: 'Thành lập từ năm 2016 và được nhiều bạn trẻ biết đến qua những mẫu áo truyền thông, Degrey hiện đang từng bước khẳng định vị trí của mình trong bản đồ streetwear Việt Nam'
    },
    {
        id: 2,
        img: img2,
        title: 'Degrey may mắn được hợp tác với các thương hiệu cùng những người có sức ảnh hưởng đến giới trẻ tạo nên sự khác biệt và  góp phần bé nhỏ thổi hồn Việt vào thời trang.'
    },
    {
        id: 3,
        img: img3,
        title: 'Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u buồn về sự nghiệp, tương lai trong quá khứ của chính mình” – theo lời chia sẻ của Degrey’s founder. Là một local brand mang khuynh hướng Á Đông, kết hợp giữa hai yếu tố truyền thống và hiện đại, Degrey luôn cố gắng mang đến những thông điệp văn hoá ý nghĩa qua từng đường nét thiết kế. Tiếp theo đó sự sang trọng, thanh lịch cũng là những yếu tố tạo nên một Degrey đầy sức hút, sự lựa chọn hoàn hảo dành cho các bạn trẻ yêu thích phong cách hoài cổ nhưng vẫn muốn thoát xác trong những bộ cánh mới mẻ hơn.'
    },
    {
        id: 4,
        img: img4,
        title: 'Hiện nay, Degrey vẫn đang tiếp tục hoàn thiện và phát triển về sản phẩm cũng như mở rộng nhiều phong cách thời trang.'
    },
    {
        id: 5,
        img: img5,
        title: 'Không còn xa lạ gì với Degrey – một local brand nổi tiếng với những sản phẩm phong phú về kiểu dáng và thiết kế lạ mắt. Với chương trình hợp tác cùng Pepsi, Degrey muốn gửi một thông điệp nhỏ qua bộ sưu tập: “Mình muốn pha màu sắc Á Đông của Degrey kết hợp cùng một thương hiệu bắt nguồn từ châu Âu. Nên các sản phẩm trong bộ sưu tập lần này mang trong mình một điều đặc biệt và mới mẻ”......'
    }

]



const Intro = () => {
    return (
        <div className='container-intro'>
            <div className='heade-intro'>
                <div>
                    <div className='left-intro '>Degrey is us - DGSUS </div>
                    <div>
                        {IntroImg.map(e => (
                            <div key={e.id}>
                                <div className='img-intro'>
                                    <img width={900} height={500} src={e.img} alt={e.title} />
                                </div>
                                <div className='text-intro'>
                                    <p>
                                        {e.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ListPage />
            </div>

            <div className='bottom-intro'>
                <h5 >Thông tin tài khoản</h5>
                <p>SKT: 1018730346</p>
                <p>Tên TK: Bùi Tấn Đạt</p>
                <p>Ngân hàng: Vietcombank</p>
            </div>

        </div>
    );
};

export default Intro;