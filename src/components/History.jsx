/* eslint-disable react/prop-types */

import Button from "./Button";
import styles from "./History.module.css";

function History({ history, onClear }) {
  return (
    <div className={styles["history"]}>
      {history && history.length > 0 && (
        <Button onClick={onClear} classes={styles["clear-btn"]}>
          Clear History
        </Button>
      )}
      <ul>
        {history && history.length === 0 && <p>There&apos;s no history yet!</p>}
        {history &&
          history.map((item) => (
            <li key={item.result}>
              <p>{item.expression}</p>
              <p>{item.result}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default History;
