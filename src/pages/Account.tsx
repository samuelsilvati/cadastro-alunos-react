import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-slate-50 text-8xl">Welcome to my Account Page!</h1>
      <p className="text-slate-50 pt-9">
        This is a simple example of a Account component created in React.
      </p>
      <Link to="/" className="text-slate-50 underline pt-6">
        Home
      </Link>
    </div>
  );
}

export default Account;
