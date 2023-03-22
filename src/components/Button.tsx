/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
}

function AppButton({ isLoading, ...props }: ButtonProps) {
  if (!isLoading)
    return (
      <button
        {...props}
        className="h-9 mt-8 text-white text-xs font-semibold bg-cyan-600 rounded hover:bg-cyan-800 transition ease-in-out duration-150"
      />
    );
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center  h-9 mt-8 font-semibold text-white text-xs bg-cyan-800 rounded hover:bg-cyan-900 transition ease-in-out duration-150 cursor-not-allowed"
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
