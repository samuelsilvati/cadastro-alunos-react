/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import AppButton from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import axios from '../services/axios';
// ...

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
      navigateTo('/login'); // history
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
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
            <Link
              to="/login"
              className={isLoading ? 'pointer-events-none' : ''}
            >
              <div className="flex items-center justify-center w-[180px] h-20 bg-zinc-300 rounded-tl border-r border-b border-zinc-400">
                <p className="font-bold">Fazer Login</p>
              </div>
            </Link>

            <div className="flex items-center justify-center w-[180px] h-20 rounded-tr">
              <p className="font-bold">Cadastro</p>
            </div>
          </div>
          <form
            className="pt-5 pr-8 pb-8 pl-8 flex flex-col"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="text-xs pt-8">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="mail" className="text-xs pt-4">
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
              <span>Criar Cadastro</span>
            </AppButton>
            {/* <Link to="/" className="text-sm text-center underline mt-8">
              Fazer login
            </Link> */}
            <p className="pt-8 text-sm">
              Lorem ipsum dolor, sit amet consectetur.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
