import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, onClick, classes, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${styles["btn"]} ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
