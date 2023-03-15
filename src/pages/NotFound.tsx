import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-slate-50 text-8xl">Oops! Page not found.</h1>
      <p className="text-slate-50 text-lg mt-8 mb-8 ">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      ;
      <Link to="/" className="text-slate-50 underline pt-6">
        Ir para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Page404() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold mb-4">Oops! Page not found.</h1>
//       <p className="text-gray-600 text-lg mb-8">
//         The page you are looking for might have been removed or is temporarily
//         unavailable.
//       </p>
//       <Link
//         to="/"
//         className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600"
//       >
//         Go back to home page
//       </Link>
//     </div>
//   );
// }

// export default Page404;
