const InputReduxComponent = (props) => {
  const { type, name, text, input } = props;
  return (
    <>
      <input
        className={"form-check-input m-1"}
        {...input}
        type={type}
        name={name}
      />
      <label htmlFor={name}>{text}</label>
    </>
  );
};

export default InputReduxComponent;
