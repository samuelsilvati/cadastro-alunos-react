/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { Eraser, FileImage, Images } from '@phosphor-icons/react';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { loginFailure } from '../../redux/auth/slice';
import axios from '../../services/axios';
import LoadingComponent from './LoadingComponent';

interface Params {
  [key: string]: string | undefined;
  id: string;
}

function EditStudentComponent() {
  const { id } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [isEnable, setIsEnable] = useState(true);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // verifica se a página está sendo carregada pela primeira vez ou se está sendo reiniciada
  //   if (performance.navigation.type === 1) {
  //     // se a página foi reiniciada, navega para a rota desejada
  //     navigateTo('/dashboard');
  //   }
  // }, [navigateTo]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        const Image = get(data, 'Images[0].url', '');
        setImage(Image);
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
        // navigateTo('/students');
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
      setIsLoading(true);
      await axios.put(`/alunos/${id}`, {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      toast.success('Cadastro Atualizado!');
      setIsLoading(false);
      navigateTo('/dashboard');
      window.location.reload();
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

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      toast.success('Aluno Apagado!');
      setIsLoading(false);
      navigateTo('/dashboard');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  };

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }

  if (!id) {
    return <LoadingComponent isLoading />;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* MODAL */}
      <div // Modal
        className={
          isModal
            ? 'fixed flex items-center justify-center inset-0 w-full h-full z-40 bg-slate-700 bg-opacity-40 backdrop-blur-sm transition ease-in-out duration-500'
            : 'hidden'
        }
      >
        <div className="w-[300px] h-max p-2 rounded-lg bg-zinc-100 shadow-inner">
          <p className="p-3 text-lg text-center">
            Tem certeza que deseja excluir o cadastro?
          </p>
          <div className="flex justify-center pb-3 pt-2">
            <button
              onClick={handleDelete}
              type="button"
              className="h-9 w-24 mr-3 text-lg text-white font-bold bg-red-400 rounded hover:bg-red-500 transition ease-in-out duration-150"
            >
              Sim
            </button>
            <button
              onClick={() => {
                setIsModal(false);
              }}
              type="button"
              className="h-9 w-24 text-lg text-white font-bold bg-indigo-600 rounded hover:bg-indigo-500 transition ease-in-out duration-150"
            >
              Não
            </button>
          </div>
        </div>
      </div>
      {/* MODAL */}
      <div className="flex flex-col w-full 2xl:w-96 order-2 2xl:order-none">
        <div>
          <div className="flex flex-col items-center 2xl:p-5 w-full order-1 2xl:order-none">
            <Link to={`/dashboard/images0/${id}`}>
              {image ? (
                <div
                  className="rounded-full w-24 h-24 2xl:w-32 2xl:h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div className="rounded-full w-24 h-24 2xl:w-32 2xl:h-32 bg-zinc-300 flex items-center justify-center">
                  <div>
                    <Images size={50} className="pt-2 m-0 text-zinc-400" />
                  </div>
                </div>
              )}
            </Link>
            <button
              onClick={() => {
                setIsModal(true);
              }}
              type="button"
              className="absolute bg-red-500 rounded-full p-2 2xl:bottom-7 2xl:top-auto top-10 right-7 hover:scale-110 hover:bg-red-400 transition ease-in-out duration-150"
            >
              <Eraser size={30} className="text-white" />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className=" text-3xl text-center font-bold py-2">
            Edite o Cadastro
          </h1>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Sobrenome"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="mail"
            id="mail"
            placeholder="E-mail"
            className="h-10 w-full pl-2 mb-5 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEnable(isEmail(e.target.value)); // Habilita o botão apenas quando a senha for maior que 5 caracteres
            }}
          />
          <label htmlFor="age" className="text-m font-semibold">
            Idade
          </label>
          <input
            type="number"
            id="age"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="weight" className="text-m font-semibold">
            Peso
          </label>
          <input
            type="number"
            id="weight"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height" className="text-m font-semibold">
            Altura
          </label>
          <input
            type="number"
            id="height"
            className="h-10 w-full pl-2 rounded-lg text-m font-medium text-indigo-700 bg-zinc-100  border-2 border-zinc-200 focus:border-2 focus:border-indigo-600 hover:border-2 hover:border-indigo-600 outline-0 transition ease-in-out duration-400"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-lg h-11 w-full mt-7 text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500 transition ease-in-out duration-400"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditStudentComponent;
