/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import { FileImage, Images } from '@phosphor-icons/react';
import { get } from 'lodash';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { loginFailure } from '../../redux/auth/slice';
import axios from '../../services/axios';
import LoadingComponent from './LoadingComponent';

function NewStudentComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let formErr = false;
    if (name.length < 3 || name.length > 255) {
      formErr = true;
      toast.error('O Nome deve ter mais de 3 caracteres');
    }
    if (lastName.length < 3 || lastName.length > 255) {
      formErr = true;
      toast.error('O Sobrenome deve ter mais de 3 caracteres');
    }
    if (!isEmail(email)) {
      formErr = true;
      toast.error('E-mail-inválido');
    }
    if (formErr) return;

    try {
      const nome = name;
      const sobrenome = lastName;
      const idade = age;
      const peso = weight;
      const altura = height;
      setIsLoading(true);
      const { data } = await axios.post('/alunos/', {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      toast.success('Cadastro Criado!');
      navigateTo(`/dashboard/${data.id}/edit`);
      setIsLoading(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      const status = get(err, 'response.status', null);

      if (errors) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro Desconhecido!');
      }
      if (status === 401) dispatch(loginFailure());
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }
  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="flex flex-col items-center 2xl:p-5 w-full">
          <Link to="/dashboard">
            <div className="rounded-full w-24 h-24 2xl:w-32 2xl:h-32 bg-zinc-300 flex items-center justify-center">
              <div>
                <Images size={50} className="pt-2 m-0 text-zinc-400" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full 2xl:w-96">
        <form onSubmit={handleSubmit}>
          <h1 className="dark:text-slate-300 text-3xl text-center font-bold py-2">
            Criar Cadastro
          </h1>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Sobrenome"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600  focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="mail"
            id="mail"
            placeholder="E-mail"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600  focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEnable(isEmail(e.target.value)); // Habilita o botão apenas quando o email for válido
            }}
          />

          <label
            htmlFor="age"
            className="dark:text-slate-300 text-m font-semibold"
          >
            Idade
          </label>
          <input
            type="number"
            id="age"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600  focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label
            htmlFor="weight"
            className="dark:text-slate-300 text-m font-semibold"
          >
            Peso
          </label>
          <input
            type="number"
            id="weight"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600  focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label
            htmlFor="height"
            className="dark:text-slate-300 text-m font-semibold"
          >
            Altura
          </label>
          <input
            type="number"
            id="height"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium dark:text-slate-300 bg-zinc-200 dark:bg-slate-600 border-2 border-zinc-200 dark:border-slate-600  focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <button
            type="submit"
            className={
              isEnable
                ? 'rounded-lg h-11 w-full mt-7 text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500'
                : 'rounded-lg h-11 w-full mt-7 text-lg text-white font-bold bg-indigo-400'
            }
            disabled={!isEnable}
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewStudentComponent;
