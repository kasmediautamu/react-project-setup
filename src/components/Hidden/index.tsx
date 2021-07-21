import './styles.scss'
type IDialog = {
  children?: any;
  _className?:string;
};

function Dialog(props: IDialog) {
  const { children,_className } = props;
  return <div className={_className}>{children}</div>
}
export default Dialog;
