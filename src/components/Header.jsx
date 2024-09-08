import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <nav>
        <h1>Calculator</h1>
      </nav>
    </header>
  );
}

export default Header;
