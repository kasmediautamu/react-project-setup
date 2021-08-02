import { func } from 'prop-types';

const FunctionAsChild = ({ children }) => children();
FunctionAsChild.propTypes = {
  children: func.isRequired
};

{/* <FunctionAsChild>
  {() => <div>Hello, World!</div>}
 </FunctionAsChild> */}
