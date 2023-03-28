import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginFailure } from '../../redux/auth/slice';
import axios from '../../services/axios';
import LoadingComponent from './LoadingComponent';
// import Loading from '../components/Loading';

interface Params {
  [key: string]: string | undefined;
  id: string;
}

function ImagesComponent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');
  const { id } = useParams<Params>();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function handleVoltarClick() {
    navigate(-1); // Navega para a página anterior
  }
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setImage(get(data, 'Images[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro ao adicionar imagem!');
        setIsLoading(false);

        navigateTo('/students');
      }
    };
    getData();
  }, [id, navigateTo]);

  const handleChange = async (e: any) => {
    const newImage = e.target.files?.[0];
    const imageURL = URL.createObjectURL(newImage);
    setImage(imageURL);

    if (id) {
      const formData = new FormData();
      formData.append('aluno_id', id);
      formData.append('file', newImage);

      try {
        setIsLoading(true);
        await axios.post('/images/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        toast.success('Imagem enviada!');
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const status = get(error, 'response', null);
        toast.error('Erro ao enviar imagem');
        if (status === 401) dispatch(loginFailure());
      }
    }
  };
  if (isLoading) return <LoadingComponent isLoading={isLoading} />;
  return (
    <div className="m-auto flex flex-col items-center w-full h-full">
      <div className="w-96 h-max p-2 rounded bg-white flex flex-col items-center">
        <p className="p-4 text-xl text-center font-semibold">
          Selecionar Imagem
        </p>
        <form className="flex items-center justify-center w-full">
          <label
            htmlFor="image"
            className="rounded-full w-60 h-60 border-2 border-indigo-600 bg-zinc-300 cursor-pointer hover:bg-zinc-400 flex items-center justify-center transition ease-in-out duration-150 overflow-hidden"
          >
            {image ? (
              <div
                className="rounded-full w-60 h-60 2xl:w-96 2xl:h-96 bg-cover bg-center hover:filter hover:grayscale hover:blur-sm  transition ease-in-out duration-150"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : (
              <span className="font-medium">Selecionar</span>
            )}
            <input
              type="file"
              className="hidden"
              id="image"
              onChange={handleChange}
            />
          </label>
        </form>
        <button
          type="button"
          onClick={handleVoltarClick}
          className="h-9 w-24 mt-5 text-white text-xs font-semibold bg-indigo-600 rounded hover:bg-indigo-400 transition ease-in-out duration-150"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

export default ImagesComponent;
