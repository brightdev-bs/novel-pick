import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Fragment } from "react";
import QuestionOne from "../../components/Question_one";

function App() {
  return (
    <>
      <div>
        <p>안녕하세요, 노블픽입니다.</p>

        <p>질문에 응답하고 답을 얻으시려면 이곳을 클릭하세요</p>
        <button>
          <Link to="/questionOne">
            <span>Get Started</span>
          </Link>
        </button>
        <Routes>
          <Route path="/questionOne" element={<QuestionOne />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
