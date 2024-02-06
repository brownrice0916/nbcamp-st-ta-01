import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { minusN, plusN } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const plusNumber = useSelector((state) => state.calculator.number);
  const [number, setNumber] = useState(0);

  const onChangeNumber = (e) => {
    const { value } = e.target;
    setNumber(Number(value));
  };
  const onClickAddNumber = () => {
    dispatch(plusN(number));
    setNumber(0);
  };

  const onClickMinusNumber = () => {
    dispatch(minusN(number));
    setNumber(0);
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={onChangeNumber} /> 만큼을{" "}
        <button onClick={onClickAddNumber}>더할게요</button>{" "}
        <button onClick={onClickMinusNumber}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{plusNumber}</p>
      </div>
    </div>
  );
}

export default App;
