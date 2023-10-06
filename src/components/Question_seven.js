import { Link } from "react-router-dom";

function QuestionSeven() {
  // 이곳에 기능적인 부분들이 있으면 넣어준다

  //이곳에서는 화면에 표시할 부분을 JSX 문법을 이용하여 넣어준다
  return (
    <div>
      <p>
        7. 소설을 볼 때 주인공이 제일 중요하며, 주인공은 무조건 멋있어야 한다.
      </p>
      <p>a. 매우 그렇다.</p>
      <p>b. 주인공만큼 주인공의 동료도 활약했으면 좋겠다.</p>
      <p>c. 주인공보다 주인공의 동료가 더 활약해도 상관없다.</p>
      <button>
        <Link to="/questionSix">이전</Link>
      </button>
      <button>
        <Link to="/">처음으로</Link>
      </button>
      <button>
        <Link to="/questionEight">다음</Link>
      </button>
    </div>
  );
}

export default QuestionSeven;
