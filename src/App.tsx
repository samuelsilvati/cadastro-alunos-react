import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Students from './pages/Students';
import LoginRoute from './routes/LoginRoute';
import PrivateRoute from './routes/PrivateRoute';
import EditStudent from './pages/EditStudent';
import NewStudent from './pages/NewStudent';
import Images from './pages/Images';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        }
      />
      <Route
        path="students"
        element={
          <PrivateRoute>
            <Students />
          </PrivateRoute>
        }
      />
      <Route path="/images/:id/" element={<Images />} />
      <Route path="/student/:id/edit" element={<EditStudent />} />
      <Route path="/student/new" element={<NewStudent />} />
      <Route path="/register" element={<Register />} />
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
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
