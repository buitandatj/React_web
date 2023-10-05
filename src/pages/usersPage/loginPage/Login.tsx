import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { alertLogin, loginFail, loginSuccess } from '../../../constants/Message';
import { userContext } from '../../../context/userContext';
import { instanceUser } from '../../../api/ApiUser';
import { CartContext } from '../../../context/cartContext';

const Login = () => {
    const { userData, setIsLoggedIn, setCurrentUser } = useContext(userContext)
    const { setCart } = useContext(CartContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate()

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!username || !password) {
            alert(alertLogin);
            return;
        }
        let user = userData.find((user) => user.username === username && user.password === password);
        if (user) {
            try {
                const res = await instanceUser.get(`carts?userId=${user.id}`)
                const newCart = res.data
                setCart(newCart)
                localStorage.setItem('userId', user.id + '');
                setIsLoggedIn(true);
                setCurrentUser(user);
                loginSuccess();
                setUsername('');
                setPassword('');
                history('/products');
            } catch (error) {
                console.error(error);
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
                    <Link to='register' className='text-[white]'>Đăng ký</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;


