/* eslint-disable jsx-a11y/label-has-associated-control */
import { Eraser, FileImage, User, UserCirclePlus } from '@phosphor-icons/react';
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

function EditStudent() {
  const { id } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
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

  useEffect(() => {
    async function getData() {
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
      // if (id) {
      await axios.put(`/alunos/${id}`, {
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
      toast.success('Cadastro Atualizado!');
      // } else {
      //   const { data } = await axios.post('/alunos/', {
      //     nome,
      //     sobrenome,
      //     email,
      //     idade,
      //     peso,
      //     altura,
      //   });
      //   toast.success('Cadastro Criado!');
      //   navigateTo(`/student/${data.id}/edit`);
      // }
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
    }
  }

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      toast.success('Aluno Apagado!');
      setIsLoading(false);
      navigateTo('/students');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <Loading isLoading={isLoading} />
      <div // Modal
        className={
          isModal
            ? 'fixed flex items-center justify-center inset-0 w-full h-full z-40 bg-slate-700 bg-opacity-40 backdrop-blur-sm transition ease-in-out duration-500'
            : 'hidden'
        }
      >
        <div className="w-[300px] h-max p-2 rounded bg-zinc-100 shadow-inner">
          <p className="p-2 text-center">
            Tem certeza que deseja excluir o cadastro?
          </p>
          <div className="flex justify-center pb-3 pt-2">
            <button
              onClick={handleDelete}
              type="button"
              className="h-9 w-24 mr-3 text-white text-xs font-semibold bg-red-400 rounded hover:bg-red-500 transition ease-in-out duration-150"
            >
              Sim
            </button>
            <button
              onClick={() => {
                setIsModal(false);
              }}
              type="button"
              className="h-9 w-24 text-white text-xs font-semibold bg-cyan-600 rounded hover:bg-cyan-800 transition ease-in-out duration-150"
            >
              Não
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10 overflow-auto mt-14">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Editar Aluno
        </h1>

        <div className="w-[360px] h-max bg-zinc-100 rounded">
          <div className="w-full flex items-center justify-center pt-7">
            <div className="flex flex-col items-center">
              {image ? (
                <img
                  src={image}
                  alt={image}
                  className="w-[172px] h-[172px] rounded-full border-2 border-cyan-600"
                />
              ) : (
                <div className="rounded-full w-[172px] h-[172px] bg-zinc-300 flex items-center justify-center border-2 border-cyan-600">
                  <div>
                    <User size={100} className="m-0 text-zinc-400" />
                  </div>
                </div>
              )}
              <div className='flex items-center justify-center w-9 h-9 mt-[-18px] bg-cyan-600 rounded-full p-1 bottom-28 hover:scale-110 hover:bg-cyan-700 transition ease-in-out duration-150"'>
                <Link to={`/images/${id}`}>
                  <FileImage
                    size={24}
                    className="text-cyan-800 hover:text-cyan-900"
                  />
                </Link>
              </div>
            </div>
          </div>
          <form
            className="pt-2 pr-8 pb-8 pl-8 flex flex-col"
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
                isLoading={isLoadingButton}
                isEnable={isEnable}
                isRed={false}
              >
                <span>Salvar Dados</span>
              </AppButton>
            </div>

            <div>
              <button
                onClick={() => {
                  navigateTo('/student/new');
                }}
                data-tooltip-target="tooltip-left"
                data-tooltip-placement="left"
                type="button"
                className="absolute bg-cyan-600 rounded-full p-2 bottom-28 right-7 hover:scale-125 hover:bg-cyan-700 transition ease-in-out duration-150"
              >
                <UserCirclePlus
                  size={44}
                  className="text-cyan-800 hover:text-cyan-900"
                />
              </button>
              <button
                onClick={() => {
                  setIsModal(true);
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
            </div>
          </form>

          {/* // <div className="flex items-center justify-center w-full h-full border-red-50">
            //   <div>
            //     <svg
            //       className="animate-spin h-6 w-6 text-cyan-800"
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //     >
            //       <circle
            //         className="opacity-25"
            //         cx="12"
            //         cy="12"
            //         r="10"
            //         stroke="currentColor"
            //         strokeWidth="4"
            //       />
            //       <path
            //         className="opacity-75"
            //         fill="currentColor"
            //         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            //       />
            //     </svg>
            //   </div>
            // </div> */}
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

export default EditStudent;
