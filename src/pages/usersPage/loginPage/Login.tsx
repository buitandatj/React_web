import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { alertLogin, loginFail, loginSuccess } from '../../../constants/Message';
import { userContext } from '../../../context/userContext';
import { instanceUser } from '../../../api/Api';
import { CartContext } from '../../../context/cartContext';

const Login = () => {
    const { userData, setIsLoggedIn, setCurrentUser } = useContext(userContext)
    const { setCart } = useContext(CartContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!username || !password) {
            alertLogin()
            return;
        }
        let user = userData.find((user) => user.username === username && user.password === password);
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
            loginSuccess();
            navigate('/products');
            try {
                const res = await instanceUser.get(`carts?userId=${user.id}`)
                const newCart = res.data
                setCart(newCart)
                localStorage.setItem('userId', user.id + '');

            } catch (error) {
                console.error('get product cart by user fail: ', error);
            }

        } else {
            loginFail();
            setUsername('');
            setPassword('');
        }
    };
    return (
        <div className="login-container">
            <form onSubmit={handleLogin
            } className="login-box">
                <h1 className="login-title">Đăng nhập</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-button" type='submit'>
                    Đăng nhập
                </button>

                <div className='register'>
                    <Link to='register' className='register-title  
                    text-[18px]'>Đăng ký</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;


