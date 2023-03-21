import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Students from './pages/Students';
import PrivateRoute from './routes/PrivateRoute';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="students"
        element={
          <PrivateRoute>
            <Students />
          </PrivateRoute>
        }
      />
      <Route
        path="register"
        element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        }
      />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <Header />
      <App />
      <ToastContainer />
    </BrowserRouter>
  );
}
