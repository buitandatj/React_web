import './style.scss';

import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { IProducts } from '../../type/IProducts';

const Header = () => {
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
    return (
        <header className='header fixed top-0'>
            <div className='bg-white w-100 d-flex justify-center'>
                <nav className='container-header h-[90px]'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className='menu'>
                        <ul className='menu-header uppercase'>
                            <li className='menu-child'><NavLink to="/">Trang chủ</NavLink></li>
                            <li className='menu-child'><NavLink to="/products">Sản phẩm</NavLink></li>
                            <li className='menu-child'><NavLink to="/store">Store</NavLink></li>
                            <li className='menu-child'><NavLink to="/intro">Giới thiệu</NavLink></li>
                        </ul>
                    </div>

                    <div className='cart '>
                        <Link to="/cart " className='flex'>
                            <FaCartShopping className='h-[27px] w-[27px] icon-cart' />
                            <div className='total-cart'>
                                <p className='length'>
                                    {cart.length}
                                </p>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;