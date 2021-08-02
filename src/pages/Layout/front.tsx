import React, { ReactNode } from 'react';

type IFront = {
  children?:ReactNode
}
const Front:React.FC = (props:IFront) => {
  const { children } = props;
  return (
    <>
      <h1>header 1</h1>
      {children}
      <h1>footer 1</h1>
    </>
  );
};
export default Front;
