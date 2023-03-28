/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Barbell } from '@phosphor-icons/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import axios from '../services/axios';

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let formErr = false;

    if (name.length < 3 || name.length > 255) {
      formErr = true;
      toast.error('O Nome deve ter mais de 3 caracteres');
    }

    if (!isEmail(email)) {
      formErr = true;
      toast.error('E-mail-inválido');
    }

    if (password.length < 6 || password.length > 12) {
      formErr = true;
      toast.error('A senha deve ter entre de 6 e 12');
    }

    if (formErr) return;

    setIsLoading(true);

    try {
      const nome = name;
      await axios.post('/users', { nome, password, email });
      toast.success('Cadastro Criado!');
      setIsLoading(false);
      navigateTo('/logscreen'); // history
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

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
        <div className="h-full w-4/5 2xl:w-[65%] flex items-center justify-center">
          <div className="flex flex-col w-96">
            <form onSubmit={handleSubmit}>
              <Barbell size={38} className="font-bold" />
              <h1 className="text-xl md:text-2xl font-bold pb-9">
                Cria sua conta GymNation
              </h1>
              <label htmlFor="nome" className="text-lg font-semibold">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                className="rounded-lg h-11 w-full pl-2 mb-4 border-2 bg-zinc-50 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="mail" className="text-lg font-semibold">
                E-mail
              </label>
              <input
                type="mail"
                id="mail"
                className="rounded-lg h-11 w-full pl-2 mb-4 border-2 bg-zinc-50 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="text-lg font-semibold">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="rounded-lg h-11 w-full pl-2 mb-8 border-2 bg-zinc-50 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsEnable(e.target.value.length > 5); // Habilita o botão apenas quando a senha for maior que 5 caracteres
                }}
              />
              <div className="flex justify-between mr-2 mb-2 ml-2">
                <Link
                  to="/logscreen"
                  className=" block w-max mr-2 text-sm md:text-lg font-semibold hover:text-slate-700 transition ease-in-out duration-400"
                >
                  Ja tem uma conta? Faça Login
                </Link>
              </div>
              <button
                type="submit"
                className={
                  !isEnable
                    ? ' flex items-center justify-center rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-400'
                    : ' flex items-center justify-center rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400'
                }
                disabled={!isEnable}
              >
                {!isLoading ? (
                  'Criar'
                ) : (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25 text"
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
