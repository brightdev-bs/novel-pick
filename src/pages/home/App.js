import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Fragment } from "react";
import Main from "../../components/Main";
import QuestionOne from "../../components/Question_one";
import QuestionTwo from "../../components/Question_two";
import QuestionThree from "../../components/Question_three";
import QuestionFour from "../../components/Question_four";
import QuestionFive from "../../components/Question_five";
import QuestionSix from "../../components/Question_six";
import QuestionSeven from "../../components/Question_seven";
import QuestionEight from "../../components/Question_eight";
import QuestionNine from "../../components/Question_nine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questionOne" element={<QuestionOne />} />
        <Route path="/questionTwo" element={<QuestionTwo />} />
        <Route path="/questionThree" element={<QuestionThree />} />
        <Route path="/questionFour" element={<QuestionFour />} />
        <Route path="/questionFive" element={<QuestionFive />} />
        <Route path="/questionSix" element={<QuestionSix />} />
        <Route path="/questionSeven" element={<QuestionSeven />} />
        <Route path="/questionEight" element={<QuestionEight />} />
        <Route path="/questionNine" element={<QuestionNine />} />
      </Routes>
    </>
  );
}

export default App;
