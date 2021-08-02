import React, { ReactNode } from 'react';

type IBack ={
  children?:ReactNode
}
const Back:React.FC = (props:IBack) => {
  const { children } = props;
  return (
    <div>
      <h1>header 2</h1>
      {children}
      <h1>footer 2</h1>
    </div>
  );
};
export default Back;
