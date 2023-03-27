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
    <div className="flex flex-col 2xl:flex-row gap-8">
      <h1 className="text-2xl md:text-2xl font-bold text-center 2xl:hidden">
        Criar Cadastro
      </h1>
      <div className="flex flex-col w-full 2xl:w-96 order-2 2xl:order-none">
        <form onSubmit={handleSubmit}>
          <h1 className="hidden 2xl:block text-xl md:text-2xl font-bold pb-9">
            Criar Cadastro
          </h1>
          <label htmlFor="name" className="text-lg font-semibold">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="lastName" className="text-lg font-semibold">
            Sobrenome
          </label>
          <input
            type="text"
            id="lastName"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="mail" className="text-lg font-semibold">
            E-mail
          </label>
          <input
            type="mail"
            id="mail"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2  border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEnable(isEmail(e.target.value)); // Habilita o botão apenas quando o email for válido
            }}
          />
          <label htmlFor="age" className="text-lg font-semibold">
            Idade
          </label>
          <input
            type="number"
            id="age"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2 border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="weight" className="text-lg font-semibold">
            Peso
          </label>
          <input
            type="number"
            id="weight"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-4 border-b-2 border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height" className="text-lg font-semibold">
            Altura
          </label>
          <input
            type="number"
            id="height"
            className="text-xl font-medium text-indigo-700 h-11 w-full pl-2 mb-10 border-b-2 border-b-zinc-100 focus:border-b-2 focus:border-b-indigo-600 hover:border-b-2 hover:border-b-indigo-600 outline-0 transition ease-in-out duration-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            type="submit"
            className={
              isEnable
                ? 'rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400'
                : 'rounded-lg h-11 w-full text-lg text-white font-bold bg-indigo-400'
            }
            disabled={!isEnable}
          >
            Criar
          </button>
        </form>
      </div>
      <div>
        <div className="flex flex-col items-center 2xl:p-5 w-full order-1 2xl:order-none">
          <div className="rounded-full w-64 h-64 bg-zinc-300 flex items-center justify-center">
            <div>
              <Images size={100} className="pt-2 m-0 text-zinc-400" />
            </div>
          </div>
          <div className='flex items-center justify-center w-9 h-9 mt-[-18px] bg-indigo-600 hover:bg-indigo-500 rounded-full p-1 bottom-28 hover:scale-110 transition ease-in-out duration-150"'>
            <Link to="/dashboard">
              <FileImage size={24} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewStudentComponent;
