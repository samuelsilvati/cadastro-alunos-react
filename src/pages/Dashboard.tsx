/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Outlet, useOutlet } from 'react-router-dom';
import HeaderDashboard from '../components/dashboard/HeaderDashboard';
import ListStudents from '../components/dashboard/ListStudents';
import SideBar from '../components/dashboard/SideBar';

function Dashboard() {
  const isNavigating = useOutlet();
  const IsNavigate = isNavigating === null;
  return (
    <div className="flex items-center justify-center w 2xl:h-screen bg-zinc-200">
      {/* SIDEBAR */}
      <div className="h-full w-[20%] hidden 2xl:flex flex-col p-9 bg-cover bg-white border-r">
        <SideBar />
      </div>
      <div className="h-full w-full 2xl:w-[80%] flex">
        <div className="flex flex-col w-full">
          <HeaderDashboard />
          <div className="flex w-full h-full">
            {/* STUDENTS LIST */}
            <div className="w-full h-full 2xl:w-[35%] bg-white p-4 2xl:p-9 border">
              <ListStudents />
            </div>
            {/* EDIT STUDENTS / CREATE STUDENTS */}
            <div className="w-full 2xl:w-[65%] bg-white border p-12 hidden 2xl:flex">
              {isNavigating === null && (
                <div>
                  <p className="w-[360px] text-4xl font-bold text-black">
                    Junte-se à nossa comunidade saudável
                  </p>
                </div>
              )}
              {/* <EditStudentComponent /> */}
              <Outlet />
            </div>

            <div
              className={`absolute w-full h-max bg-white p-9  flex 2xl:hidden ${
                isNavigating === null ? '2xl:hidden hidden' : 'flex 2xl:hidden'
              }`}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
