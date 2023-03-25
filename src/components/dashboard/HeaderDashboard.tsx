/* eslint-disable react/button-has-type */
import { MagnifyingGlass, Plus } from '@phosphor-icons/react';

function HeaderDashboard() {
  return (
    <div className="p-6 m-3 rounded-xl flex justify-between bg-white">
      <div className="flex flex-grow items-center rounded-lg h-11 max-w-[500px] pl-2 border-2 border-zinc-200  bg-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400 ">
        <MagnifyingGlass size={22} weight="bold" className="text-zinc-500" />
        <input
          type="search"
          className="h-10 w-full mx-2 outline-none border-none bg-zinc-200"
        />
      </div>
      <button className="rounded-lg h-11 w-[200px] text-lg hidden xl:flex items-center justify-center gap-3 text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400">
        <Plus size={22} weight="bold" />
        Adicionar
      </button>
      <button className="rounded-full xl:hidden h-11 w-11 ml-4 text-lg flex items-center justify-center gap-3 text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400">
        <Plus size={22} weight="bold" />
      </button>
    </div>
  );
}

export default HeaderDashboard;
