import React, { ElementType, ReactNode } from "react";

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
  as: ElementType;
  className?: string;
  dataTestingId?: string;
  handleOnClick: () => void;
  children: ReactNode;
}
const defaultProps = {
  as: "button",
  className: "",
  dataTestingId: "",
  children: <button>click me</button>,
};
const Button = (props: ButtonProps) => {
  const buttonClasses = `${props.className} ${containerClasses}`;
  const { as: Tag } = props;
  return (
    <Tag
      className={buttonClasses}
      data-testing-id={
        props.dataTestingId ? props.dataTestingId + "-button" : "button"
      }
      onClick={props.handleOnClick}
    >
      {props.children}
    </Tag>
  );
};

Button.defaultProps = defaultProps;
export default Button;
