const ButtonComponent = ({ props }) => {
  const { content, style } = props;
  return content && <button className={style}>{content}</button>;
};

export default ButtonComponent;
