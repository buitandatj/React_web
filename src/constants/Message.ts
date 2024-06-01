import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const addCart = () => {
  toast.success('Thêm thành công!', {
    // position: toast.POSITION.TOP_RIGHT
  });
};
export const deleteCart = () => {
  toast('Đã xóa sản phẩm');
};
export const loginSuccess = () => {
  toast.success('Đăng nhập thành công');
};
export const loginFail = () => {
  toast.warning('Sai email hoặc mật khẩu');
};
export const register = () => {
  toast.success('Đăng ký thành công');
};
export const logoutSuccess = () => {
  toast.success('Đã đăng xuất');
};
export const requestLogin = () => {
  toast.warning('Đăng nhập để mua hàng');
};
export const validateForm = () => {
  toast.warning('Đã có email này...');
};


export const userName = ()=>{
  toast.warning('vui lòng nhập email')
}
export const password = ()=>{
  toast.warning('vui lòng nhập mật khẩu')
}
export const phone = ()=>{
  toast.warning('vui lòng nhập số điện thoại')
}
export const alertCart = ()=>{
  toast.warning('không có sản phẩm nào...')
}
export const nameUser = ()=>{
  toast.warning('Vui lòng nhập họ và tên')
}
