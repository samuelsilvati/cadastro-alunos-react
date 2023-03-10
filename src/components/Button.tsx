/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function AppButton(props: Props) {
  return (
    <button
      {...props}
      className="h-9 mt-8 text-white text-xs font-semibold bg-cyan-600 rounded hover:bg-cyan-800 transition ease-in-out duration-150 "
    />
  );
}

export default AppButton;
