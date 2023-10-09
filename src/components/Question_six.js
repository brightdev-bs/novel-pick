import { Link } from "react-router-dom";

function QuestionSix() {
  // 이곳에 기능적인 부분들이 있으면 넣어준다

  //이곳에서는 화면에 표시할 부분을 JSX 문법을 이용하여 넣어준다
  return (
    <div>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        6. 배경이 현대였으면 좋겠다.
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        a. 매우 그렇다.
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        b. 그렇다.
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        c. 상관없다.
      </button>
      <br></br>
      <button
        style={{
          width: "300px",
          minHeight: "80px",
          fontSize: "15pt",
          marginTop: "20px",
          background: "#34AB64",
          border: "0px",
        }}
      >
        d. 현대가 아니였으면 좋겠다.
      </button>
      <br></br>
      <button>
        <Link to="/questionFive">이전</Link>
      </button>
      <button>
        <Link to="/">처음으로</Link>
      </button>
      <button>
        <Link to="/questionSeven">다음</Link>
      </button>
    </div>
  );
}

export default QuestionSix;
