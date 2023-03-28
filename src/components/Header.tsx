import { Link, useNavigate } from 'react-router-dom';
import { SignOut, User, Users } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginFailure } from '../redux/auth/slice';
import { RootState } from '../redux/store';
import Loading from './Loading';

function Header() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    dispatch(loginFailure());
    setIsLoading(false);
    navigateTo('/login');
  };

  if (isLoggedIn)
    return (
      <header className="fixed hidden items-center justify-center w-full bg-zinc-400 z-50 border-b border-zinc-400">
        <Loading isLoading={isLoading} />
        <div className="max-w-6xl pl-4 pr-4 grow flex items-center justify-between">
          <a
            href="https://github.com/samuelsilvati"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64px"
              height="64px"
              fill="rgb(255,255,255)"
            >
              {' '}
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </a>

          <div className="text-white font-semibold">
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/students"
                  className="flex justify-center p-1 hover:text-gray-200 transition ease-in-out duration-150"
                >
                  ALUNOS
                  <Users size={24} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="flex justify-center p-1 hover:text-gray-200 transition ease-in-out duration-150"
                >
                  CONTA
                  <User size={24} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  to="/exit"
                  className="flex justify-center p-1 hover:text-gray-200 transition ease-in-out duration-150"
                >
                  SAIR
                  <SignOut size={24} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  return <div />;
}

export default Header;
