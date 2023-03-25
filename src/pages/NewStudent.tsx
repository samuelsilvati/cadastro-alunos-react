/* eslint-disable jsx-a11y/label-has-associated-control */
import { get } from 'lodash';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import AppButton from '../components/Button';
import { loginFailure } from '../redux/auth/slice';
import axios from '../services/axios';

function NewStudent() {
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
      navigateTo(`/student/${data.id}/edit`);
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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Novo Aluno
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
            <div className="flex flex-col mt-6 w-full">
              <AppButton
                type="submit"
                isLoading={isLoading}
                isEnable={isEnable}
                isRed={false}
              >
                <span>Criar Cadastro</span>
              </AppButton>
            </div>
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

export default NewStudent;
