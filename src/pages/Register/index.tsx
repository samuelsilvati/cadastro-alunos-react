import { Link } from 'react-router-dom';
import AppButton from '../../components/Button';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/src/img/background.webp')] bg-cover font-roboto">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-80" />
      <div className="z-10">
        <h1 className="text-slate-50 text-4xl font-bold text-center pb-9">
          Cadastro de alunos
        </h1>

        <div className="w-[360px] h-[560px] bg-zinc-100 rounded">
          <div className="flex">
            <Link to="/">
              <div className="flex items-center justify-center w-[180px] h-20 bg-zinc-300 rounded-tl border-r border-b border-zinc-400">
                <p className="font-bold">Fazer Login</p>
              </div>
            </Link>
            <div className="flex items-center justify-center w-[180px] h-20 rounded-tr">
              <p className="font-bold">Cadastro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
