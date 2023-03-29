/* eslint-disable react/button-has-type */
import {
  Barbell,
  Gear,
  House,
  Moon,
  Power,
  Sun,
  User,
} from '@phosphor-icons/react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { loginFailure } from '../../redux/auth/slice';

function SideBar() {
  // const [isLoading, setIsLoading] = useState(false);
  const { setTheme } = useTheme();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e: any) => {
    // setIsLoading(true);
    e.preventDefault();
    dispatch(loginFailure());
    // setIsLoading(false);
    navigateTo('/logscreen');
  };
  return (
    <>
      <div className="flex itens-center gap-2 font-semibold dark:text-slate-300 text-xl">
        <Barbell size={32} />
        GymNation
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="mt-9 text-lg font-semibold">
          <ul>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-600">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 text-xl dark:text-slate-300">
                  <House size={24} /> Home
                </div>
              </Link>
            </li>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-600">
              <Link to="/accountpage">
                <div className="flex items-center gap-2 text-xl dark:text-slate-300">
                  <User size={24} /> Conta
                </div>
              </Link>
            </li>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-600">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 text-xl dark:text-slate-300">
                  <Gear size={24} /> Configurações
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-zinc-200 dark:bg-slate-600 rounded-full m-2 w-4/5 h-8 flex items-center justify-center mb-5">
            <button
              className="dark:bg-slate-800 dark:text-slate-300 font-semibold m-1 rounded-full w-1/2 flex items-center justify-center gap-2"
              onClick={() => setTheme('dark')}
            >
              <Sun size={20} />
              <p>Dark</p>
            </button>
            <button
              className="bg-white dark:bg-slate-600 dark:text-slate-300 font-semibold m-1 rounded-full w-1/2 flex items-center justify-center gap-2"
              onClick={() => setTheme('light')}
            >
              <Moon size={20} />
              <p>Light</p>
            </button>
          </div>
          <div className="border-t-2 dark:border-slate-600" />
          <ul>
            <li className="py-4 pl-3 mt-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-600">
              <Link onClick={handleLogout} to="/logout" className="py-8">
                <div className="flex items-center gap-2 text-xl dark:text-slate-300">
                  <Power size={24} /> Sair
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
