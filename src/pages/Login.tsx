/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../components/Button';
import { loginRequest } from '../redux/auth/slice';
import PasswordInput from '../components/PasswordInput';
import { RootState } from '../redux/store';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();
    let formErr = false;

    if (!isEmail(email)) {
      formErr = true;
      toast.error('E-mail-inválido');
    }

    if (password.length < 6 || password.length > 12) {
      formErr = true;
      toast.error('A senha deve ter entre de 6 e 12');
    }

    if (formErr) return;

    dispatch(loginRequest({ email, password }));
  }

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
            <Link
              to="/register"
              className={isLoading ? 'pointer-events-none' : ''}
            >
              <div className="flex items-center justify-center w-[180px] h-20 bg-zinc-300 rounded-tr border-l border-b border-zinc-400">
                <p className="font-bold">Cadastro</p>
              </div>
            </Link>
          </div>
          <form
            className="pt-5 pr-8 pb-8 pl-8 flex flex-col"
            onSubmit={handleLogin}
          >
            <label htmlFor="mail" className="text-xs pt-8">
              Endereço de e-mail
            </label>
            <input
              type="mail"
              id="mail"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="text-xs pt-4">
              Senha
            </label>
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AppButton type="submit" isLoading={isLoading}>
              <span>Fazer Login</span>
            </AppButton>
            <p className="pt-8 text-sm">
              Bem-vindo ao nosso sistema de cadastro de alunos! Para acessar as
              funcionalidades do sistema, por favor, faça o login com suas
              credenciais acima. Caso ainda não tenha uma conta, clique em
              &quot;Cadastro&quot; para criar uma nova.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
