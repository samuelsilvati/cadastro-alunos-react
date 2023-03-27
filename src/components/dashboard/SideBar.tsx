/* eslint-disable react/button-has-type */
import { Barbell, Gear, House, Power, User } from '@phosphor-icons/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginFailure } from '../../redux/auth/slice';

function SideBar() {
  // const [isLoading, setIsLoading] = useState(false);
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
      <div className="flex itens-center gap-2 font-semibold text-xl">
        <Barbell size={32} />
        GymNation
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="mt-9 text-lg font-semibold">
          <ul>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 transition ease-in-out duration-150">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 text-xl">
                  <House size={24} /> Home
                </div>
              </Link>
            </li>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 transition ease-in-out duration-150">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 text-xl">
                  <User size={24} /> Conta
                </div>
              </Link>
            </li>
            <li className="py-4 pl-3 my-1 rounded-lg hover:bg-zinc-100 transition ease-in-out duration-150">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 text-xl">
                  <Gear size={24} /> Configurações
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t-2">
          <ul>
            <li className="py-4 pl-3 mt-4 rounded-lg hover:bg-zinc-100 transition ease-in-out duration-150">
              <Link onClick={handleLogout} to="/logout" className="py-8">
                <div className="flex items-center gap-2 text-xl">
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
