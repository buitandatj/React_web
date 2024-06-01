import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginSuccess } from '../../../constants/Message';
import { userContext } from '../../../context/userContext';
import { instanceUser } from '../../../api/Api';
import { CartContext } from '../../../context/cartContext';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { userData, setIsLoggedIn, setCurrentUser } = useContext(userContext)
    const { setCart } = useContext(CartContext)

    const navigate = useNavigate()
    const { register, handleSubmit, setError, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    });
    const handleLogin: any = async () => {
        const { username, password } = watch()

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

        } 
    };
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(handleLogin)
            } className="login-box">
                <h1 className="login-title">Đăng nhập</h1>
                <input
                    type="text"
                    placeholder="username"

                    {...register('username', { required: "Username is required" })}
                    className="login-input"
                />
                {errors.username && <span>{errors.username.message}</span>}
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    {...register('password', { required: "Password is required" })}
                    className="login-input"
                />
                {errors.password && <span>{errors.password.message}</span>}
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


