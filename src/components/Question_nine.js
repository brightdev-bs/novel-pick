import { Link } from "react-router-dom";

function QuestionNine() {
  // 이곳에 기능적인 부분들이 있으면 넣어준다

  //이곳에서는 화면에 표시할 부분을 JSX 문법을 이용하여 넣어준다
  return (
    <div>
      <p>9. 스케일이 큰 소설이 좋다.</p>
      <p>a. 매우 그렇다.</p>
      <p>b. 그렇다.</p>
      <p>c. 상관없다.</p>
      <p>d. 아니다.</p>
      <button>
        <Link to="/questionEight">이전</Link>
      </button>
      <button>
        <Link to="/">처음으로</Link>
      </button>
      <button>
        <Link to="/result">결과 보기</Link>
      </button>
    </div>
  );
}

export default QuestionNine;
