/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useState } from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function PasswordInput(props: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-auto flex items-center justify-end pt-[5px]">
      <input
        {...props}
        type={!showPassword ? 'text' : 'password'}
        className="rounded h-9 pl-2 border border-zinc-300 focus:border focus:border-cyan-600 outline-0 absolute w-[296px]"
      />
      <button
        onClick={handleClickShowPassword}
        className="text-gray-400 relative pr-2"
      >
        {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
      </button>
    </div>
  );
}

export default PasswordInput;
