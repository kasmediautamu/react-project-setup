import React from "react";
import './styles.scss'
type Props = {
  primary: string;
  children: any;
  btnClass?: string;
  active?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
function Button(props: Props) {
  const { primary, children, active, btnClass, disabled, onClick } = props;
  const buttonType = primary ? "submit" : "button";
  return (
    <button
      className={`${active} ${btnClass}`}
      disabled={disabled}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}
export default Button;
