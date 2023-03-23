/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../services/axios';
import AppButton from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import { RootState } from '../redux/store';
import { loginFailure } from '../redux/auth/slice';

function Account() {
  const authData = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { id } = authData;
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    setName(authData.nome);
    setEmail(authData.email);
  }, [authData.email, authData.nome]);

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

    if (!id && (password.length < 6 || password.length > 12)) {
      formErr = true;
      toast.error('A senha deve ter entre de 6 e 12');
    }

    if (formErr) return;

    setIsLoading(true);
    const nome = name;
    try {
      await axios.put('/users', {
        nome,
        password: password || undefined,
        email,
      });
      toast.success('Cadastro Atualizado!');
      setIsLoading(false);
      // navigateTo('/login'); // history
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      const status = get(err, 'response.status', null);
      if (status === 401) {
        toast.error('Faça login novamente!');
        dispatch(loginFailure());
        navigateTo('/login');
        return;
      }
      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Minha Conta
        </h1>

        <div className="w-[360px] h-[560px] bg-zinc-100 rounded">
          <div className="flex">
            <div className="flex items-center justify-center w-full h-20 rounded-tr">
              <p className="font-bold">Olá {authData.nome}!</p>
            </div>
          </div>
          <p className="pt-1 text-sm text-center">
            Edite os seus dados ou altere sua senha abaixo:
          </p>
          <form
            className="pt-7 pr-8 pb-8 pl-8 flex flex-col"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="text-xs">
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
              Nova Senha &#40;Opcional&#41;
            </label>
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <AppButton type="submit" isLoading={isLoading} isEnable>
              <span>Salvar Dados</span>
            </AppButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
