/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { Eraser, FileImage } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function NewStudentComponent() {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-col w-96">
        <form action="">
          <h1 className="text-xl md:text-2xl font-bold pb-9">Criar Cadastro</h1>
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
  );
}

export default NewStudentComponent;
