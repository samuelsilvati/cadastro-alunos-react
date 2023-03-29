import { Barbell } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-[url('/src/img/photo-1549060279-7e168fcee0c2.webp')] bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <div className="container h-full mx-auto px-9 z-10">
        <header className="w-full p-6 flex items-center justify-between">
          <div className="flex itens-center gap-2 text-xl text-white font-bold">
            <Barbell size={32} />
            GymNation
          </div>
          <div className="flex gap-6">
            <Link
              to="/logscreen"
              className="hidden 2xl:flex items-center justify-center rounded-lg h-9 w-36 text-sm text-white font-bold bg-indigo-600 hover:bg-indigo-500"
            >
              Cadastro
            </Link>
            <Link
              to="/logscreen"
              className="flex items-center justify-center rounded-lg h-9 text-lg text-indigo-600 font-bold hover:text-indigo-500"
            >
              Login
            </Link>
          </div>
        </header>
        <div className="h-4/5 flex items-center justify-start">
          <div className="flex items-center justify-start">
            <div className="flex flex-col md:flex-row items-center xl:justify-start justify-center">
              <div>
                <h1 className="w-80 pb-9 text-5xl font-bold text-slate-50">
                  Gerencie seus Alunos em um só lugar
                </h1>
                <p className="w-80 pb-9 text-xl font-semibold text-slate-50">
                  Registre suas atividades e tenha mais controle na sua Academia
                </p>
                <Link
                  to="/logscreen"
                  className="flex items-center justify-center rounded-lg h-11 mb-9 w-full md:w-72  text-lg text-white font-bold bg-indigo-600 hover:bg-indigo-500"
                >
                  Experimente
                </Link>
              </div>
              <div className="xl:ml-56">
                <img src="src/img/dashboard.webp" alt="dashboard.img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
