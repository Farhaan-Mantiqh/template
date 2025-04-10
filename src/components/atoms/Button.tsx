type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({ variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={`rounded px-4 py-2 text-white ${
        variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'
      }`}
      {...props}
    />
  );
};
