import { cva, VariantProps } from 'class-variance-authority';

// Define the variants for the button
const buttonVariants = cva(
  'bg-white border border-custom-green-500 text-custom-green-500 hover:bg-custom-green-500 hover:text-white px-4 py-2 rounded-md shadow-custom-green-shadow',
  {
    variants: {},
    defaultVariants: {},
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  const buttonClass = buttonVariants(props) + (className ? ` ${className}` : '');
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
