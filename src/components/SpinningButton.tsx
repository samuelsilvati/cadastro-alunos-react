function SpinningButton() {
  return (
    // <button
    //   type="button"
    //   className="inline-flex items-center justify-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
    //   disabled=""
    // >
    //   <svg
    //     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //   >
    //     <circle
    //       className="opacity-25"
    //       cx="12"
    //       cy="12"
    //       r="10"
    //       stroke="currentColor"
    //       strokeWidth="4"
    //     />
    //     <path
    //       className="opacity-75"
    //       fill="currentColor"
    //       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //     />
    //   </svg>
    //   Processing...
    // </button>
    <button
      type="button"
      className="inline-flex items-center justify-center h-9 mt-1 font-semibold text-white text-xs bg-cyan-800 rounded hover:bg-cyan-900 transition ease-in-out duration-150 cursor-not-allowed"
    >
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </button>
  );
}

export default SpinningButton;
