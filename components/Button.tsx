import React, { ReactNode } from 'react';

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, Props>(
  ({ children, ...props }, ref) => {
    return (
      <>
        <button
          {...props}
          ref={ref}
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';
