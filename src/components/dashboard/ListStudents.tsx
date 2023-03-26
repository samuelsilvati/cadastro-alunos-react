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
  return (
    <div className="overflow-y-auto h-[750px]">
      <div className="border-b-2 border-zinc-100 pb-4 pl-5 text-lg font-semibold">
        <p>Nome</p>
      </div>
      {students.map((student) => (
        <Link to={`/dashboard/${student.id}/edit`} key={student.id}>
          <div
            key={student.id}
            className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-100 hover:rounded-lg hover:bg-zinc-100 transition ease-in-out duration-400"
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
              <p className="text-lg font-semibold">
                {student.nome} {student.sobrenome}
              </p>
              <p className="text-sm font-semibold">{student.email}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListStudents;
