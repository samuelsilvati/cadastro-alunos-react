/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { User, UserCirclePlus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import axios from '../services/axios';
import Loading from '../components/Loading';

interface Student {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  Images: Image[];
}

interface Image {
  url: string;
}

function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <Loading isLoading={isLoading} />
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Alunos
        </h1>

        <div className="w-[max-width] min-h-[600px] bg-zinc-100 rounded">
          <div className="pt-2">
            {students.map((student) => (
              <Link to="/aluno:id" key={student.id}>
                <div
                  key={student.id}
                  className="flex items-center gap-4 px-4 py-3  border-1 border-b font-medium hover:bg-zinc-200 transition ease-in-out duration-150"
                >
                  {get(student, 'Images[0].url', false) ? (
                    <img
                      src={student?.Images?.[0]?.url}
                      alt=""
                      className="w-16 rounded-full"
                    />
                  ) : (
                    <div className="rounded-full w-16 h-16 bg-zinc-300 flex justify-center">
                      <div>
                        <User size={50} className="pt-2 m-0 text-zinc-400" />
                      </div>
                    </div>
                  )}
                  <p>
                    {student.nome}&nbsp;
                    <span>{student.sobrenome}</span>
                  </p>
                  <p>{student.email}</p>
                </div>
              </Link>
            ))}
          </div>
          <button
            data-tooltip-target="tooltip-left"
            data-tooltip-placement="left"
            type="button"
            className="absolute bg-cyan-600 rounded-full p-2 bottom-7 right-7 hover:scale-125 hover:bg-cyan-700 transition ease-in-out duration-150"
          >
            <UserCirclePlus
              size={44}
              className="text-cyan-800 hover:text-cyan-900"
            />
          </button>
        </div>
        <p className="text-center pt-6">
          <Link to="/" className="text-slate-50 underline ">
            Ir para a página inicial
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Students;
