import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { CartProvider } from './context/CartContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <ProductProvider>
      <CartProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/Cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
