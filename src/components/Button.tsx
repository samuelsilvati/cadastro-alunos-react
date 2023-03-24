/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  isEnable: boolean;
  isRed: boolean;
}

function AppButton({ isLoading, isEnable, isRed, ...props }: ButtonProps) {
  if (!isLoading)
    return (
      <button
        {...props}
        className={
          // eslint-disable-next-line no-nested-ternary
          isEnable
            ? isRed
              ? 'h-9 mt-1 w-full text-white text-xs font-semibold bg-rose-500 rounded hover:bg-rose-700 transition ease-in-out duration-150'
              : 'h-9 mt-1 w-full text-white text-xs font-semibold bg-cyan-600 rounded hover:bg-cyan-800 transition ease-in-out duration-150'
            : 'h-9 mt-1 text-zinc-500 text-xs font-semibold border border-zinc-500 rounded cursor-default'
        }
        disabled={!isEnable}
      />
    );
  return (
    <button
      type="button"
      className={
        !isRed
          ? 'inline-flex items-center justify-center w-full h-9 mt-1 font-semibold text-white text-xs bg-cyan-800 rounded hover:bg-cyan-900 transition ease-in-out duration-150 }cursor-not-allowed'
          : 'inline-flex items-center justify-center w-full h-9 mt-1 font-semibold text-white text-xs bg-red-500 rounded hover:bg-red-400 transition ease-in-out duration-150 }cursor-not-allowed'
      }
      disabled={isLoading}
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

AppButton.defaultProps = {
  isLoading: false,
};

export default AppButton;
