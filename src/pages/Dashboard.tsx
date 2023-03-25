/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Barbell,
  Eraser,
  FileImage,
  Gear,
  House,
  MagnifyingGlass,
  Plus,
  Power,
  User,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-200">
      <div className="h-full w-[20%] hidden xl:flex flex-col p-9 bg-cover bg-white">
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
                <Link to="/dashboard" className="py-8">
                  <div className="flex items-center gap-2 text-xl">
                    <Power size={24} /> Sair
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full w-full xl:w-[80%] flex">
        <div className="flex flex-col w-full">
          <div className="p-6 m-3 rounded-xl flex justify-between bg-white">
            <div className="flex flex-grow items-center rounded-lg h-11 max-w-[500px] pl-2 border-2 border-zinc-200  bg-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400 ">
              <MagnifyingGlass
                size={22}
                weight="bold"
                className="text-zinc-500"
              />
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
          <div className="flex w-full h-full">
            <div className="w-full 2xl:w-[35%] bg-white ml-3 mb-3 mr-3 p-9 rounded-xl">
              <div className="border-b-2 border-zinc-100 pb-4 pl-5 text-lg font-semibold">
                <p>Nome</p>
              </div>
              <Link to="/dashboard">
                <div className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-100 hover:rounded-lg hover:bg-zinc-100 transition ease-in-out duration-400">
                  <div className="rounded-full w-16 h-16 bg-[url('/src/img/avatar.jpg')] bg-cover" />
                  <div>
                    <p className="text-lg font-semibold">Samuel Silva</p>
                    <p className="text-sm font-semibold">
                      samuel7silva@outlook.com
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-100 hover:rounded-lg hover:bg-zinc-100 transition ease-in-out duration-400">
                  <div className="rounded-full w-16 h-16 bg-[url('/src/img/avatar0.jpg')] bg-cover" />
                  <div>
                    <p className="text-lg font-semibold">Joana Doe</p>
                    <p className="text-sm font-semibold">annadoe@gmail.com</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[65%] bg-white mr-3 mb-3 p-9 rounded-xl hidden 2xl:flex gap-8">
              <div className="flex flex-col w-96">
                <form action="">
                  <h1 className="text-xl md:text-2xl font-bold pb-9">
                    Edite o Cadastro
                  </h1>
                  <label className="text-lg font-semibold">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
                  />
                  <label className="text-lg font-semibold">E-mail</label>
                  <input
                    type="mail"
                    id="mail"
                    className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
                  />
                  <label className="text-lg font-semibold">Idade</label>
                  <input
                    type="number"
                    id="mail"
                    className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
                  />
                  <label className="text-lg font-semibold">Peso</label>
                  <input
                    type="number"
                    id="mail"
                    className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
                  />
                  <label className="text-lg font-semibold">Altura</label>
                  <input
                    type="number"
                    id="mail"
                    className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-10 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
                  />
                  <button className="rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400">
                    Salvar
                  </button>
                </form>
              </div>
              <div>
                <div className="flex flex-col items-center p-5 w-full">
                  <div className="rounded-full w-96 h-96 bg-[url('/src/img/avatar.jpg')] bg-cover" />
                  <div className='flex items-center justify-center w-9 h-9 mt-[-18px] bg-indigo-600 hover:bg-indigo-500 rounded-full p-1 bottom-28 hover:scale-110 transition ease-in-out duration-150"'>
                    <Link to="/dashboard">
                      <FileImage size={24} className="text-white" />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="absolute bg-red-500 rounded-full p-2 bottom-7 right-7 hover:scale-125 hover:bg-red-400 transition ease-in-out duration-150"
                  >
                    <Eraser size={44} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
