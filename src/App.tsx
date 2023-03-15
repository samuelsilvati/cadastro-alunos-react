import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import PrivateRoute from './routes/PrivateRoute';

export function App() {
  const isLoggedIn = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="register"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
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
    </BrowserRouter>
  );
}
