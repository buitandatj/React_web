import React, { useEffect, useState } from 'react';
import { instanceUser } from '../../../api/ApiUser';
import { v4 as uuidv4 } from 'uuid';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { password, phone, register, userName } from '../../../constants/Message';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
    const [formUserRegiste, setFormUserRegiste] = useState({
        id: '',
        lastname: '',
        firstname: '',
        username: '',
        phone: '',
        password: ''
    });
    
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormUserRegiste({
            ...formUserRegiste,
            [name]: value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            if (!formUserRegiste.username) {
                alert(userName);
                return;
            }
            if (!formUserRegiste.password) {
                alert(password);
                return;
            }
            if (!formUserRegiste.phone) {
                alert(phone);
                return;
            }

            const dataToSubmit = {
                ...formUserRegiste,
                id: uuidv4()
            };
            const res = await instanceUser.post('users', dataToSubmit);
            setFormUserRegiste(res.data);
            setFormUserRegiste({
                id: '',
                lastname: '',
                firstname: '',
                username: '',
                phone: '',
                password: ''
            })
              register()
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="login-container">
            <form
                onSubmit={handleSubmit}
                className="login-box">
                <h1 className="login-title">Đăng ký</h1>
                <div className='flex gap-3'>
                    <input
                        type="text"
                        name='lastname'
                        value={formUserRegiste.lastname}
                        placeholder="Họ..."
                        className="login-input"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name='firstname'
                        value={formUserRegiste.firstname}
                        placeholder="Tên..."
                        className="login-input"
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name='username'
                    value={formUserRegiste.username}
                    placeholder="Tên đăng nhập"
                    className="login-input"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="login-input"
                    name="phone"
                    value={formUserRegiste.phone}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="login-input"
                    name="password"
                    value={formUserRegiste.password}
                    onChange={handleChange}
                />
                <div className='flex items-center gap-3'>
                    <Link to='/login'>
                        <IoMdArrowRoundBack className='text-3xl mt-3 text-[white]' />
                    </Link>
                    <button className="login-button" type='submit' onClick={handleSubmit}>
                        Đăng Ký
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;