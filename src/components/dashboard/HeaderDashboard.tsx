/* eslint-disable react/button-has-type */
import { List, MagnifyingGlass, Plus, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

function HeaderDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="p-4 2xl:p-6 flex items-center justify-between bg-white border">
      <div // Menu Mobile
        className={`absolute top-0 ${
          menuOpen ? 'left-0' : 'left-[-100%]'
        }  h-full w-full 2xl:hidden flex flex-col bg-cover transition-all ease-in duration-200 z-50`}
      >
        <div
          className={`absolute w-full h-full transition-all ease-in-out duration-75 ${
            menuOpen
              ? 'bg-slate-700 bg-opacity-40 backdrop-blur-sm'
              : 'bg-transparent'
          }`}
        >
          <div className="absolute top-0 left-0 h-full 2xl:hidden w-[80%] flex flex-col p-9 bg-cover bg-white">
            <div className="absolute w-full pr-14 mt-[-20px] flex justify-end">
              <button
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <X size={32} />
              </button>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="flex items-center mr-4 2xl:hidden"
      >
        <List size={32} />
      </button>
      <div className="flex flex-grow items-center rounded-lg h-11 max-w-[500px] pl-2 border-2 border-zinc-200  bg-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400 ">
        <MagnifyingGlass size={22} weight="bold" className="text-zinc-500" />
        <input
          type="search"
          className="h-10 w-full mx-2 outline-none border-none bg-zinc-200"
          placeholder="Pesquise um cadastro..."
        />
      </div>
      <Link
        to="/dashboard/newstudent"
        className="rounded-lg h-11 w-[200px] text-lg hidden xl:flex items-center justify-center gap-3 text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400"
      >
        <Plus size={22} weight="bold" />
        Adicionar
      </Link>
      <Link
        to="/dashboard/newstudent"
        className="rounded-full xl:hidden h-9 w-9 ml-4 text-lg flex items-center justify-center gap-3 text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400"
      >
        <Plus size={22} weight="bold" />
      </Link>
    </div>
  );
}

export default HeaderDashboard;
