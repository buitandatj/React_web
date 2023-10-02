import './App.scss';
import './styles/Styles.scss'
import Header from './components/Header/Header';
import HomePage from './pages/homePage/HomePage';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cartPage/Cart';
import Products from './pages/producPage/Products';
import ProductDetailsPage from './pages/productDetailPage/ProductDetailsPage';
import Store from './pages/storePage/Store';
import Intro from './pages/aboutPage/About';
import { Slide, ToastContainer } from 'react-toastify';
import Checkout from './pages/cartPage/checkout/Checkout';
import CartTable from './pages/cartPage/cartTable/CartTable';
import Login from './pages/usersPage/loginPage/Login';
import RegisterPage from './pages/usersPage/registerPage/RegisterPage';
import UserForm from './pages/usersPage/UserForm';
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <ToastContainer transition={Slide} autoClose={1000} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetailsPage />} />
          <Route path='store' element={<Store />} />
          <Route path='about' element={<Intro />} />
          <Route path='cart' element={<Cart />} >
            <Route path='' element={<CartTable />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
          <Route path='login' element={<UserForm />} >
            <Route path='' element={<Login />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
