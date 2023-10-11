import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, Fragment } from "react";
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
import ResultScoreSix from "../../components/Result_score_six";
import ResultScoreSevenToFourteen from "../../components/Result_score_seven_to_fourteen";
import ResultScoreFifteenToEighteen from "../../components/Result_score_Fifteen_to_Eighteen";
import ResultScoreNineteen from "../../components/Result_score_nineteen";

function App() {
  //사용자의 답변을 저장하는 State
  const [userAnswers, setUserAnswers] = useState([]);

  //각 질문의 점수
  const questionScore = [
    { a: 0, b: 1, c: 2, d: 3 }, //1번 질문 각각 점수
    { a: 2, b: 3, c: 1, d: 0 }, //2번 질문 각각 점수
    { a: 1, b: 3, c: 0, d: 2 }, //3번 질문 각각 점수
    { a: 0, b: 1, c: 2, d: 3 }, //4번
    { a: 0, b: 2, c: 1, d: 3 }, //5번
    { a: 1, b: 0, c: 2, d: 3 }, //6번
    { a: 0, b: 1, c: 3 }, //7번
    { a: 3, b: 1, c: 0 }, //8번
    { a: 2, b: 1, c: 0, d: 3 }, //9번
  ];

  const handleAnswer = (answer) => {
    //답변 업데이트
    setUserAnswers([...userAnswers, answer]);
  };

  //사용자 답변을 기반으로 점수 계산
  const calculateTotalScore = () => {
    let totalScore = 0;
    userAnswers.forEach((answer, index) => {
      const questionScore = questionScore[index][answer];
      totalScore += questionScore;
    });
    return totalScore;
  };

  //결과 컴포넌트 선택 함수
  const getResultComponent = (totalScore) => {
    if (totalScore <= 6) {
      return <ResultScoreSix />;
    } else if (totalScore <= 14) {
      return <ResultScoreSevenToFourteen />;
    } else if (totalScore <= 18) {
      return <ResultScoreFifteenToEighteen />;
    } else {
      return <ResultScoreNineteen />;
    }
  };

  const currentQuestionNumber = userAnswers.length + 1;

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
