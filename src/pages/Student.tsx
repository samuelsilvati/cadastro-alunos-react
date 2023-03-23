/* eslint-disable jsx-a11y/label-has-associated-control */
import { Eraser } from '@phosphor-icons/react';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';

import AppButton from '../components/Button';
import Loading from '../components/Loading';
import { loginFailure } from '../redux/auth/slice';
import axios from '../services/axios';

interface Params {
  [key: string]: string | undefined;
  id: string;
}

function Student() {
  const { id } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [isEnable, setIsEnable] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Image = get(data, 'Images[0].url', '');

        setName(data.nome);
        setLastName(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);
        setIsLoading(false);
      } catch (err) {
        const errors = get(err, 'response.data.errors', []);
        const status = get(err, 'response.status', null);
        if (status === 400) {
          errors.map((error) => toast.error(error));
        }
        navigateTo('/students');
        setIsLoading(false);
      }
    }
    getData();
  }, [id, navigateTo]);

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
      setIsLoadingButton(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Cadastro Atualizado!');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Cadastro Criado!');
        navigateTo(`/student/${data.id}/edit`);
      }
      setIsLoadingButton(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      const status = get(err, 'response.status', null);

      if (errors) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro Desconhecido!');
      }
      if (status === 401) dispatch(loginFailure());
      setIsLoadingButton(false);
      console.log(errors.length);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <Loading isLoading={isLoading} />
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          {id ? 'Editar Aluno' : 'Novo Aluno'}
        </h1>

        <div className="w-[360px] h-[560px] bg-zinc-100 rounded">
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
            <label htmlFor="lastName" className="text-xs pt-4">
              Sobrenome
            </label>
            <input
              type="text"
              id="lastName"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="mail" className="text-xs pt-4">
              Endereço de e-mail
            </label>
            <input
              type="text"
              id="mail"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEnable(isEmail(e.target.value)); // Habilita o botão apenas quando a senha for maior que 5 caracteres
              }}
            />
            <label htmlFor="age" className="text-xs pt-4">
              Idade
            </label>
            <input
              type="number"
              id="age"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="weight" className="text-xs pt-4">
              Peso
            </label>
            <input
              type="number"
              id="weight"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label htmlFor="height" className="text-xs pt-4">
              Altura
            </label>
            <input
              type="number"
              id="height"
              className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 hover:border-cyan-600 outline-0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <AppButton
              type="submit"
              isLoading={isLoadingButton}
              isEnable={isEnable}
            >
              <span>{id ? 'Salvar Dados' : 'Criar Cadastro'}</span>
            </AppButton>
            {id ? (
              <button
                onClick={() => {
                  navigateTo('/student/new');
                }}
                data-tooltip-target="tooltip-left"
                data-tooltip-placement="left"
                type="button"
                className="absolute bg-red-500 rounded-full p-2 bottom-7 right-7 hover:scale-125 hover:bg-red-400 transition ease-in-out duration-150"
              >
                <Eraser
                  size={44}
                  className="text-cyan-800 hover:text-cyan-900"
                />
              </button>
            ) : (
              ''
            )}
          </form>
        </div>
        <p className="text-center pt-6">
          <Link to="/students" className="text-slate-50 underline pt-6">
            Voltar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Student;
