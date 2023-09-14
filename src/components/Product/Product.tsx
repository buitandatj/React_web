import './style.scss';


const ProductsData = [
    {
        id: 1,
        img: 'https://product.hstatic.net/1000281824/product/6a35fa07c2534599b66341806c506dab_05e77ac4c9fb4f3e8cb558a010461998_large.jpeg',
        title: 'Áo thun',
        price: 245000
    },
    {
        id: 2,
        img: 'https://product.hstatic.net/1000281824/product/4789e6526fec43c2a1adeb0ed3e73c7c_31adb692a88d4dfcb79605b630a48995_large.jpeg',
        title: 'Áo thun đen',
        price: 244000
    },
    {
        id: 3,
        img: 'https://product.hstatic.net/1000281824/product/nt5177_kq37cpuw-1-athf-hinh_mat_truoc-0_340f1e72f71548b0bbab3b4eca4576c3_large.jpg',
        title: 'Túi đen',
        price: 144000
    },

]
const Product = () => {
    return (
        <>
            {ProductsData.map((product) => (
                <div key={product.id} className='product'>
                    <div>
                        <a href="">
                            <img src={product.img} alt="" />
                        </a>
                    </div>
                    <div className='title-name'>
                        <a href=''>{product.title}</a>
                    </div>
                    <div className='price'>
                        <p>{product.price}</p>
                    </div>
                    <div className='add-cart'>
                        <button>Thêm vào giỏ</button>
                        <button>Xem chi tiết</button>
                    </div>
                </div>

            ))}
        </>


    );
};

export default Product;