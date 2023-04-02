import "./Button.css";

export const Button = ({ title, background, padding, color, fontSize, width, onClick, border }) => {
  return (
    <button
      className="button"
      style={{
        background: background,
        padding: padding,
        color: color,
        fontSize: fontSize,
        width: width,
        border: border,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
