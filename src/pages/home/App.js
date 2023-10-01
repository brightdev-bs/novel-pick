import { Link } from "react-router-dom";
import "./App.css";
import React, { Fragment } from "react";
import QuestionOne from "../components/Question_one";

function App() {
  return (
    <>
      <p>안녕하세요, 노블픽입니다.</p>

      <p>
        질문에 응답하고 답을 얻으시려면 <Link>이곳</Link>을 클릭하세요
      </p>
      <QuestionOne />
    </>
  );
}

export default App;
