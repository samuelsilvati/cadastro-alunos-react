import { Link } from 'react-router-dom';
import AppButton from '../components/Button';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 ">
      {/* <Loading isLoading /> */}
      <h1 className="text-slate-50 text-8xl">Welcome to my Home Page!</h1>
      <p className="text-slate-50 pt-9">
        This is a simple example of a Home component created in React.
      </p>
      <Link to="/logscreen" className="text-slate-50 underline pt-6">
        Login
      </Link>
      <div className="flex flex-col justify-center gap-4 w-[230px]">
        <AppButton isEnable isRed isLoading>
          Botão
        </AppButton>

        <AppButton isEnable isRed={false} isLoading>
          Botão
        </AppButton>

        <AppButton isEnable={false} isRed isLoading={false}>
          Botão
        </AppButton>

        <AppButton isEnable isRed={false} isLoading={false}>
          Botão
        </AppButton>
        <AppButton isEnable isRed isLoading={false}>
          Botão
        </AppButton>
      </div>
    </div>
  );
}

export default Home;
