import { Link } from "react-router-dom";

function QuestionEight() {
  // 이곳에 기능적인 부분들이 있으면 넣어준다

  //이곳에서는 화면에 표시할 부분을 JSX 문법을 이용하여 넣어준다
  return (
    <div>
      <p>8. 철학적 메시지를 담고 있는 소설이 좋다.</p>
      <p>a. 매우 그렇다.</p>
      <p>b. 상관없다.</p>
      <p>c. 철학적 메시지가 없는 편이 좋다.</p>
      <button>
        <Link to="/questionSeven">이전</Link>
      </button>
      <button>
        <Link to="/">처음으로</Link>
      </button>
      <button>
        <Link to="/questionNine">다음</Link>
      </button>
    </div>
  );
}

export default QuestionEight;
