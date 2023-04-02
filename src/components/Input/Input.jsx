import "./Input.css";

export const Input = ({ id, type, placeholder, value, onChange, name, style }) => {
  return (
    <input
      id={id}
      style={style}
      type={type}
      name={name}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
