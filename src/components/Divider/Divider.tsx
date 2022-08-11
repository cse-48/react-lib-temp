import React from "react";

interface DividerProps {
  className?: string;
  widthClassName?: string;
  heightClassName?: string;
  bgColorClassName?: string;
  direction?: string;
}
const defaultProps = {
  bgColorClassName: "bg-whiteSmoke",
  className: "",
  direction: "horizontal",
};

const baseClasses = `
    overflow-visible;
    border-width-0;
`;

const Divider = (props: DividerProps) => {
  const {
    className,
    widthClassName,
    heightClassName,
    bgColorClassName,
    direction,
  } = props;

  const widthClasses = widthClassName
    ? widthClassName
    : direction === "horizontal"
    ? "width-full"
    : "width-0.5";

  const heightClasses = heightClassName
    ? heightClassName
    : direction === "horizontal"
    ? "height-0.5"
    : "height-full";

  const classes = `${baseClasses} ${className} ${widthClasses} ${heightClasses} ${bgColorClassName}`;

  return (
    <>
      <hr className={classes} />
    </>
  );
};

Divider.defaultProps = defaultProps;
export default Divider;
