import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { IProducts } from '../../type/IProducts';
import { userContext } from '../../context/userContext';
import useUser from '../../helper/useUser';


const Header = () => {
    const { handleLogout } = useUser();
    const { currentUser } = useContext(userContext);
    const { cart }: { cart: IProducts[] } = useContext(CartContext);
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    let menuMobile;
    if (showMenu) {
        menuMobile = <div className='menu-mobile'>
            <div className='close-menu' onClick={toggleMenu}>
                <AiOutlineClose />
            </div>
            <ul className='menu-header uppercase'>
                <li className='menu-child' onClick={toggleMenu}><NavLink to="/" >Trang chủ</NavLink></li>
                <li className='menu-child' onClick={toggleMenu}><NavLink to="/products">Sản phẩm</NavLink></li>
                <li className='menu-child' onClick={toggleMenu}><NavLink to="/store">Store</NavLink></li>
                <li className='menu-child' onClick={toggleMenu}><NavLink to="/about">Giới thiệu</NavLink></li>
            </ul>
        </div>
    }



    return (
        <header className='header fixed top-0'>
            <div className='bg-white w-100 d-flex justify-center'>
                <nav className='container-header h-[90px]'>
                    {menuMobile}
                    <div className='nav-menu' onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
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
                            <li className='menu-child'><NavLink to="/about">Giới thiệu</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='cart '>
                            <Link to="/cart " className='flex'>
                                <FaCartShopping className='h-[27px] w-[27px] icon-cart' />
                                <div className='total-cart'>
                                    <p className='length'>
                                        {cart?.length}
                                    </p>
                                </div>
                            </Link>
                        </div>
                        {currentUser ? (
                            <div className='flex items-center'>
                                <div> Hello {currentUser.lastname} !</div>
                                <Link to='login' onClick={handleLogout}><RiLogoutBoxFill className='text-3xl' /></Link>
                            </div>
                        ) : (
                            <Link to='login' className='icon-login cursor-pointer'>
                                <RiLoginBoxFill className='text-3xl' />
                            </Link>
                        )}

                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

function setCart(updatedCart: IProducts[]) {
    throw new Error('Function not implemented.');
}
