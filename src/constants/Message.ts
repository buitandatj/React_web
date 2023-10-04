import { toast } from 'react-toastify';

export const addCart = () => toast('Thêm thành công!');
export const deleteCart = () => toast('Đã xóa');
export const loginSuccess = () => toast('Đăng nhập thành công');
export const loginFail = () => toast('Đăng nhập thất bại');
export const register = () => toast('Đăng ký thành công');
export const logoutSuccess = () => toast('Đã đăng xuất');

export const alertLogin = 'Vui lòng nhập...';
export const userName = 'vui lòng nhập tên tài khoản';
export const password = 'vui lòng nhập mật khẩu';
export const phone = 'vui lòng nhập số điện thoại';
export const alertCart = 'không có sản phẩm nào...'