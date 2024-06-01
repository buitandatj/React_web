import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { instanceUser } from '../../../api/Api';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { userContext } from '../../../context/userContext';

type FormValues = {
    lastname: string;
    firstname: string;
    username: string;
    phone: string;
    password: string;
};

const RegisterPage = () => {
    const { userData } = useContext(userContext);
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors }, reset } = useForm<FormValues>({
        defaultValues: {
            lastname: '',
            firstname: '',
            username: '',
            phone: '',
            password: '',

        }
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        let emailUser = userData?.find((user) => user.username === data.username);
        try {
            if (emailUser) {
                setError("username", { type: "manual", message: "Username already exists" });
                return;
            }
            const dataToSubmit = {
                ...data,
                id: uuidv4()
            };
            console.log(dataToSubmit);
            
            await instanceUser.post('users', dataToSubmit);
            reset();
            navigate('/form');

        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div className="login-container mt-3">
            <form onSubmit={handleSubmit(onSubmit)} className="login-box">
                <h1 className="login-title">Đăng ký</h1>
                <div className='flex gap-3'>
                    <input
                        type="text"
                        {...register('lastname', { required: "Họ is required" })}
                        placeholder="Họ..."
                        className="login-input"
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}

                    <input
                        type="text"
                        {...register('firstname', { required: "Tên is required" })}
                        placeholder="Tên..."
                        className="login-input"
                    />
                    {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
                <input
                    type="text"
                    {...register('username', { required: "Email is required" })}
                    placeholder="Email"
                    className="login-input"
                />
                {errors.username && <span>{errors.username.message}</span>}

                <input
                    type="text"
                    {...register('phone', { required: "Số điện thoại is required" })}
                    placeholder="Số điện thoại"
                    className="login-input"
                />
                {errors.phone && <span>{errors.phone.message}</span>}

                <input
                    type="password"
                    {...register('password', { required: "Mật khẩu is required" })}
                    placeholder="Mật khẩu"
                    className="login-input"
                />
                {errors.password && <span>{errors.password.message}</span>}

                <div className='flex items-center gap-3'>
                    <Link to='/form'>
                        <IoMdArrowRoundBack className='text-3xl mt-3' />
                    </Link>
                    <button className="login-button" type='submit'>
                        Đăng ký
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;