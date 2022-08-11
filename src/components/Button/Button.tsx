import React, { ReactNode } from "react";

const containerClasses = `display-inline-flex
    align-items-center
    justify-content-center
    white-space-nowrap
    user-select-none
    text-decoration-none
    font-weight-bold
    border-radius-3
    width-full
    border-style-solid
    border-width-1`;

interface ButtonProps {
  className?: string;
  dataTestingId?: string;
  handleOnClick: () => void;
  children: ReactNode;
}
const defaultProps = {
  className: "",
  dataTestingId: "",
  children: <button>click me</button>,
};
const Button = (props: ButtonProps) => {
  const buttonClasses = `${props.className} ${containerClasses}`;
  return (
    <div
      className={buttonClasses}
      data-testing-id={
        props.dataTestingId ? props.dataTestingId + "-button" : "button"
      }
      onClick={props.handleOnClick}
    >
      {props.children}
    </div>
  );
};

Button.defaultProps = defaultProps;
export default Button;
