import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div>
      <p>안녕하세요, 노블픽입니다.</p>

      <p>
        질문에 응답하고 답을 얻으시려면
        <span className="bold-text">아래 Get Started 버튼</span>을 클릭하세요
      </p>
      <button>
        <Link to="/questionOne">
          <span>Get Started</span>
        </Link>
      </button>
    </div>
  );
}

export default Main;
