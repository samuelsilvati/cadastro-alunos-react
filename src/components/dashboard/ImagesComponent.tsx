import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'axios';
import { loginFailure } from '../../redux/auth/slice';
import axios from '../../services/axios';
import LoadingComponent from './LoadingComponent';

interface Params {
  [key: string]: string | undefined;
  id: string;
}

function ImagesComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');
  const { id } = useParams<Params>();
  const dispatch = useDispatch();

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
      }
    };
    getData();
  }, [id]);

  const handleChange = async (e: any) => {
    const newImage = e.target.files?.[0];

    if (id) {
      const formData = new FormData();

      formData.set('file', newImage);
      formData.set('fileName', 'filename.jpg');
      formData.set('folder', 'cadastro-alunos');

      try {
        setIsLoading(true);
        const uploadResponse = await api.post(
          `${import.meta.env.VITE_APP_IMAGEKIT_UPLOAD_URL}`,
          formData,
          {
            headers: {
              Authorization: `Basic ${import.meta.env.VITE_APP_IMAGEKIT_KEY} `,
            },
          }
        );
        const imageUrl = uploadResponse.data.url;
        setImage(imageUrl);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        const aluno_id = id;
        const url = imageUrl;

        await axios.post('/images/', {
          aluno_id,
          url,
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
  if (isLoading)
    return (
      <div
        className="rounded-full w-52 h-52 bg-cover bg-center hover:filter hover:grayscale hover:blur-sm  transition ease-in-out duration-150"
        style={{ backgroundImage: `url(${image})` }}
      >
        <LoadingComponent isLoading={isLoading} />
      </div>
    );
  return (
    <div className="m-auto flex flex-col items-center w-full h-full">
      <div>
        <form className="flex items-center justify-center w-full">
          <label
            htmlFor="image"
            className="rounded-full w-52 h-52 border-2 border-indigo-600 bg-zinc-300 cursor-pointer hover:bg-zinc-400 flex items-center justify-center transition ease-in-out duration-150 overflow-hidden"
          >
            {image ? (
              <div
                className="rounded-full w-52 h-52  bg-cover bg-center hover:filter hover:grayscale hover:blur-sm  transition ease-in-out duration-150"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : (
              <span className="font-medium text-gray-500">
                Fazer Upload de Imagem
              </span>
            )}
            <input
              type="file"
              className="hidden"
              id="image"
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default ImagesComponent;
