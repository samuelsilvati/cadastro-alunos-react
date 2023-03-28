import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { User } from '@phosphor-icons/react';
import axios from '../../services/axios';
import LoadingComponent from './LoadingComponent';

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

function ListStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <LoadingComponent isLoading={isLoading} />;
  }
  if (!students) {
    return (
      <div>
        <p className="text-lg font-semibold">Não existem registos ainda!</p>
        <p className="text-lg font-semibold">
          Clique no Botão Adicionar acima para iniciar um cadastro!
        </p>
      </div>
    );
  }
  return (
    <div className="2xl:overflow-auto h-max 2xl:h-[780px]">
      <LoadingComponent isLoading={isLoading} />
      <div className="border-b-2 border-zinc-200 dark:border-slate-600 pb-4 pl-5 dark:text-slate-300 text-lg font-semibold">
        <p>Nome</p>
      </div>
      {students.map((student) => (
        <Link to={`/dashboard/${student.id}/edit`} key={student.id}>
          <div
            key={student.id}
            className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-200 dark:border-slate-600 hover:rounded-lg hover:bg-zinc-100 dark:hover:bg-slate-600"
          >
            {get(student, 'Images[0].url', false) ? (
              <div
                className="rounded-full w-16 h-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${student?.Images?.[0]?.url})` }}
              />
            ) : (
              <div className="rounded-full w-16 h-16 bg-zinc-300 flex justify-center">
                <div>
                  <User size={50} className="pt-2 m-0 text-zinc-400" />
                </div>
              </div>
            )}
            <div>
              <p className="dark:text-slate-300 text-lg font-semibold">
                {student.nome} {student.sobrenome}
              </p>
              <p className="dark:text-slate-300 text-sm font-semibold">
                {student.email}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListStudents;
