/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Outlet } from 'react-router-dom';
import HeaderDashboard from '../components/dashboard/HeaderDashboard';
import ListStudents from '../components/dashboard/ListStudents';
import SideBar from '../components/dashboard/SideBar';

function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-200">
      {/* SIDEBAR */}
      <div className="h-full w-[20%] hidden xl:flex flex-col p-9 bg-cover bg-white">
        <SideBar />
      </div>
      <div className="h-full w-full xl:w-[80%] flex">
        <div className="flex flex-col w-full">
          <HeaderDashboard />
          <div className="flex w-full h-full">
            {/* STUDENTS LIST */}
            <div className="w-full 2xl:w-[35%] bg-white ml-3 mb-3 mr-3 p-9 rounded-xl">
              <ListStudents />
            </div>
            {/* EDIT STUDENTS / CREATE STUDENTS */}
            <div className="w-[65%] bg-white mr-3 mb-3 p-9 rounded-xl hidden 2xl:flex">
              <Outlet />
              {/* <EditStudentComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
