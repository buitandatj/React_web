import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alertLogin, loginFail, loginSucces } from '../../constants/Message';
import { userContext } from '../../context/userContext';

const Login = () => {
    const { userData, setIsLoggedIn } = useContext(userContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate()

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const user = userData.find((user: { username: string; password: string; }) => user.username === username && user.password === password);
        if (!username || !password) {
            alert(alertLogin);
            return;
        }
        if (user) {
            setIsLoggedIn(true)
            loginSucces()
            setUsername('')
            setPassword('')
            history('/products')
        } else {
            loginFail()
            setUsername('')
            setPassword('')
        }
    }
    return (
        <div className="login-container">
            <form onSubmit={handleLogin
            } className="login-box">
                <h1 className="login-title">Đăng nhập</h1>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
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
            </form>
        </div>
    );
};

export default Login;