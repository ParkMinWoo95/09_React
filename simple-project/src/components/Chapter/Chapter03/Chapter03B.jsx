import { useState, useEffect } from "react";

const Chapter03B = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("메세지");

  const minusButtonHandler = () => {
    // useState(1);
    setCount((count) => count - 1);
  };
  useEffect(() => {
    alert(count + "번 클릭!");
  }, [count]);
  /*
    첫 렌더링(NOUBT)과 재렌더링(UPDATE) 시점에 무언가 수행하고 싶다면 useEffect Hook사용

    [] => 첫 렌더링 시점에만 수행하고싶다.
    
    [state, state, state] => 각각의 state가 set될 떄마다 수행하곘다.

    Hook 사용 시 주의사항
    - 블럭 최상위에서만 Hook을 호출할 수 있음(반복, 조건, 함수내부 호출할 수 있음)
    - React 함수 컴포넌트 내부에서만 사용가능(클래스 컴포넌트에서는 사용할 수 없음)
   */

  return (
    <>
      <h3>{count}</h3>
      <h3></h3>
      <h3>
        <button onClick={minusButtonHandler}>감소버튼</button>
      </h3>
    </>
  );
};

export default Chapter03B;