import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

const initialHistory = [
  {
    expression: "6+3",
    result: 9,
  },
  {
    expression: "0+1",
    result: 1,
  },
];

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(initialHistory);

  function operandClickHandler(value) {
    setExpression((prevExpression) => prevExpression + value);
  }

  function operatorClickHandler(op) {
    setExpression((prevExpression) => prevExpression + op);
  }

  function helperClickHandler(action) {
    setExpression((prevExpression) => prevExpression + action);
  }

  function showResult() {
    setResult(eval(expression));
    setHistory((prevHistory) => [
      { expression: expression, result: eval(expression) },
      ...prevHistory,
    ]);
  }

  function clearExpression() {
    setExpression("");
    setResult(0);
  }

  return (
    <>
      <Header />
      <main>
        <div className="main-app">
          <div className="input-expression">
            <p>{expression}</p>
          </div>
          <div className="user-output">
            <p>{result}</p>
          </div>
          <div className="control-row">
            <Button onClick={clearExpression}>AC</Button>
            <Button onClick={() => operatorClickHandler("%")}>%</Button>
            <Button onClick={() => helperClickHandler("back")}>{"<X"}</Button>
            <Button onClick={() => operatorClickHandler("/")}>/</Button>
          </div>
          <div className="control-row">
            <Button onClick={() => operandClickHandler("7")}>7</Button>
            <Button onClick={() => operandClickHandler("8")}>8</Button>
            <Button onClick={() => operandClickHandler("9")}>9</Button>
            <Button onClick={() => operatorClickHandler("*")}>x</Button>
          </div>
          <div className="control-row">
            <Button onClick={() => operandClickHandler("4")}>4</Button>
            <Button onClick={() => operandClickHandler("5")}>5</Button>
            <Button onClick={() => operandClickHandler("6")}>6</Button>
            <Button onClick={() => operatorClickHandler("-")}>-</Button>
          </div>
          <div className="control-row">
            <Button onClick={() => operandClickHandler("1")}>1</Button>
            <Button onClick={() => operandClickHandler("2")}>2</Button>
            <Button onClick={() => operandClickHandler("3")}>3</Button>
            <Button onClick={() => operatorClickHandler("+")}>+</Button>
          </div>
          <div className="control-row">
            <Button onClick={() => operandClickHandler("00")}>00</Button>
            <Button onClick={() => operandClickHandler("0")}>0</Button>
            <Button onClick={() => operandClickHandler(".")}>.</Button>
            <Button onClick={showResult}>=</Button>
          </div>
        </div>
        <div className="history">
          <ul>
            {history.map((item) => (
              <li key={item.result}>
                <p>{item.expression}</p>
                <p>{item.result}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
