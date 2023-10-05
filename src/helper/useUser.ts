import { useContext } from 'react';
import { userContext } from '../context/userContext';
import { CartContext } from '../context/cartContext';
import { logoutSuccess } from '../constants/Message';

const useUser = () => {
  const { isLoggedIn, setCurrentUser, setIsLoggedIn, setUserData } = useContext(userContext);
  const { setCart } = useContext(CartContext);

  const handleLogout = () => {
    if (isLoggedIn) {
      setCurrentUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('userId');
      // setUserData([]);
      setCart([]);
    }
    logoutSuccess();
  };
  return { handleLogout };
};

export default useUser;
