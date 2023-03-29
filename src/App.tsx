import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
import HomePage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EditStudentComponent from './components/dashboard/EditStudentComponent';
import NewStudentComponent from './components/dashboard/NewStudentComponent';
import ImagesComponent from './components/dashboard/ImagesComponent';
import ThemeContextProvider from './hooks/useTheme';
import SignIn from './pages/SignIn';
import AccountPage from './pages/AccountPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/logscreen"
        element={
          <LoginRoute>
            <HomePage />
          </LoginRoute>
        }
      />
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
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/newstudent" element={<NewStudentComponent />} />
        <Route path="/dashboard/:id/edit" element={<EditStudentComponent />} />
        <Route path="/dashboard/images0/:id/" element={<ImagesComponent />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/images/:id/" element={<Images />} />
      <Route path="/student/:id/edit" element={<EditStudent />} />
      <Route path="/student/new" element={<NewStudent />} />
      <Route path="/register" element={<Register />} />
      <Route path="/accountpage" element={<AccountPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
        <ToastContainer position="top-center" />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}
