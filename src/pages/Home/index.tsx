/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../../components/Button';

export default function Home() {
  const [active, setMode] = useState(true);
  const toogleButton = () => {
    setMode(!active);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Cadastro de alunos
        </h1>

        <div className="w-[360px] h-[560px] bg-zinc-100 rounded">
          <div className="flex">
            <div className="flex items-center justify-center w-[180px] h-20 rounded-tl">
              <p className="font-bold">Fazer Login</p>
            </div>
            <Link to="/register">
              <div className="flex items-center justify-center w-[180px] h-20 bg-zinc-300 rounded-tr border-l border-b border-zinc-400 ">
                <p className="font-bold">Cadastro</p>
              </div>
            </Link>
          </div>
          <form className="p-8 flex flex-col">
            <label htmlFor="mail" className="text-xs pt-8">
              Endereço de e-mail
            </label>
            <input
              type="mail"
              id="mail"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 outline-0"
            />
            <label htmlFor="" className="text-xs pt-4">
              Senha
            </label>
            <input
              type="password"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 outline-0"
            />
            <AppButton onClick={toogleButton}>
              {active ? (
                <span>Fazer Login</span>
              ) : (
                <svg
                  className="m-auto animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
            </AppButton>
            <p className="pt-8 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              voluptatum facilis vitae suscipit culpa. Repellendus, inventore
              iusto omnis animi odit alias asperiores sequi porro eligendi,
              quaerat illum voluptates harum? Mollitia.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
