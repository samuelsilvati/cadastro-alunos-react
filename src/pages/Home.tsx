import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-slate-50 text-8xl">Welcome to my Home Page!</h1>
      <p className="text-slate-50 pt-9">
        This is a simple example of a Home component created in React.
      </p>
      <Link to="/login" className="text-slate-50 underline pt-6">
        Login
      </Link>
    </div>
  );
}

export default Home;
