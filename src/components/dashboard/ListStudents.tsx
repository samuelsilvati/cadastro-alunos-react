import { Link } from 'react-router-dom';

function ListStudents() {
  return (
    <div>
      <div className="border-b-2 border-zinc-100 pb-4 pl-5 text-lg font-semibold">
        <p>Nome</p>
      </div>
      <Link to="/dashboard">
        <div className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-100 hover:rounded-lg hover:bg-zinc-100 transition ease-in-out duration-400">
          <div className="rounded-full w-16 h-16 bg-[url('/src/img/avatar.jpg')] bg-cover" />
          <div>
            <p className="text-lg font-semibold">Samuel Silva</p>
            <p className="text-sm font-semibold">samuel7silva@outlook.com</p>
          </div>
        </div>
      </Link>
      <Link to="/dashboard">
        <div className="flex items-center gap-3 my-4 py-2 pl-5 border-b-2 border-zinc-100 hover:rounded-lg hover:bg-zinc-100 transition ease-in-out duration-400">
          <div className="rounded-full w-16 h-16 bg-[url('/src/img/avatar0.jpg')] bg-cover" />
          <div>
            <p className="text-lg font-semibold">Joana Doe</p>
            <p className="text-sm font-semibold">annadoe@gmail.com</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListStudents;
