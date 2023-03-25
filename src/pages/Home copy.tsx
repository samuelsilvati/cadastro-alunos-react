/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Barbell } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <header className="absolute">
        <div className="flex itens-center gap-2 pt-9 pl-9 text-xl text-black xl:text-white font-bold">
          <Barbell size={32} />
          GymNation
        </div>
      </header>
      <div className="flex items-center justify-center h-screen">
        <div className="hidden h-full w-[35%] bg-[url('/src/img/codioful-formerly-gradienta-m_7p45JfXQo-unsplash.jpg')] bg-cover xl:block">
          <div className="mt-28 ml-9">
            <p className="w-80 text-4xl font-bold text-black xl:text-white">
              Junte-se à nossa comunidade saudável
            </p>
          </div>
          <div className="absolute ml-9 mb-9 bottom-0 text-sm text-slate-300">
            <span>
              Foto de{' '}
              <a
                href="https://unsplash.com/@codioful?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Codioful (Formerly Gradienta)
              </a>{' '}
              na{' '}
              <a
                href="https://unsplash.com/pt-br/fotografias/m_7p45JfXQo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </span>
          </div>
        </div>
        <div className="h-full w-[65%] flex items-center justify-center">
          <div className="flex flex-col w-96">
            <form action="">
              <Barbell size={38} className="font-bold" />
              <h1 className="text-xl md:text-2xl font-bold pb-9">
                Faça login no GymNation
              </h1>
              <label className="text-lg font-semibold">E-mail</label>
              <input
                type="mail"
                id="mail"
                className="rounded-lg h-11 w-full pl-2 mb-4 border-2 bg-zinc-50 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
              />
              <label className="text-lg font-semibold">Senha</label>
              <input
                type="password"
                id="mail"
                className="rounded-lg h-11 w-full pl-2 mb-8 border-2 bg-zinc-50 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
              />
              <div className="flex justify-between mr-2 mb-2 ml-2">
                <Link
                  to="/login"
                  className=" block w-max text-neutral-500 text-sm md:text-lg font-semibold hover:text-neutral-600 transition ease-in-out duration-400"
                >
                  Esqueceu a senha?
                </Link>
                <Link
                  to="/login"
                  className=" block w-max mr-2 text-sm md:text-lg font-semibold hover:text-slate-700 transition ease-in-out duration-400"
                >
                  Precisa de uma conta?
                </Link>
              </div>
              <button className="rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
