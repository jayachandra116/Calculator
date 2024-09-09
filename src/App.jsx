import { useState } from "react";
import "./App.css";

import Button from "./components/Button";
import Header from "./components/Header";
import History from "./components/History";
const operators = ["+", "-", "*", "/", "%"];

const initialHistory = [];

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
    // setExpression((prevExpression) => prevExpression + action);
    switch (action) {
      case "back":
        setExpression((prevExpression) => prevExpression.slice(0, -1));
        break;
    }
  }

  function showResult() {
    console.log(`Evaluating expression: ${expression}`);
    if (operators.includes(expression.slice(-1))) {
      setResult(eval(expression.slice(0, -1)));
      setHistory((prevHistory) => [
        {
          expression: expression.slice(0, -1),
          result: eval(expression.slice(0, -1)),
        },
        ...prevHistory,
      ]);
    } else {
      setResult(eval(expression));
      setHistory((prevHistory) => [
        { expression: expression, result: eval(expression) },
        ...prevHistory,
      ]);
    }
  }

  function clearExpression() {
    setExpression("");
    setResult(0);
  }

  function clearHistory() {
    setHistory([]);
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
        <History history={history} onClear={clearHistory} />
      </main>
    </>
  );
}

export default App;
