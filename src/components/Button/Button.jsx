import "./Button.css";

export const Button = ({ title, background, padding, color, fontSize, width }) => {
  return (
    <button
      className="button"
      style={{ background: background, padding: padding, color: color, fontSize: fontSize, width: width }}
    >
      {title}
    </button>
  );
};
