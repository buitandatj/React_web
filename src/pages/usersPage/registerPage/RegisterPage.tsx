import React, { useContext, useState } from 'react';
import { instanceUser } from '../../../api/Api';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { nameUser, password, phone, register, userName, validateForm } from '../../../constants/Message';
import { userContext } from '../../../context/userContext';
const RegisterPage = () => {
    const { userData } = useContext(userContext)
    const navigate = useNavigate()
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
        let emailUser = userData?.find((user) => user.username === formUserRegiste.username);
        try {
            if (!formUserRegiste.lastname && !formUserRegiste.firstname) {
                nameUser()
                return;
            }
            if (!formUserRegiste.username) {
                userName()
                return;
            }


            if (!formUserRegiste.phone) {
                phone()
                return;
            }
            if (!formUserRegiste.password) {
                password()
                return;
            }
            if (emailUser) {
                validateForm()
                setFormUserRegiste({
                    id: '',
                    lastname: formUserRegiste.lastname,
                    firstname: formUserRegiste.firstname,
                    username: '',
                    phone: formUserRegiste.phone,
                    password: formUserRegiste.password
                })
                return;
            }
            const dataToSubmit = {
                ...formUserRegiste,
                id: uuidv4()
            };
            const res = await instanceUser.post('users', dataToSubmit);
            setFormUserRegiste(res.data);
            navigate('/form');
            register()
        } catch (error) {
            console.error(error);
        }
        window.location.reload()
    };
    return (
        <div className="login-container mt-3">
            <form
                onSubmit={handleSubmit}
                className="login-box">
                <h1 className="login-title">Đăng ký</h1>
                <div className='flex gap-3'>
                    <input
                        type="email"
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
                    placeholder="Email"
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
                    <Link to='/form'>
                        <IoMdArrowRoundBack className='text-3xl mt-3' />
                    </Link>
                    <button className="login-button" type='submit' onClick={handleSubmit}>
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;