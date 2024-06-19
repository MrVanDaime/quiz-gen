import { useState } from "react";

import Form from "./components/Form";
import questions from "./data/questions";
import QuizList from "./components/QuizList";

function App() {
  const [sliderValue, setSliderValue] = useState(1);
  const [currQuestions, setCurrQuestions] = useState([]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleClick = () => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledQuestions.slice(0, sliderValue);
    setCurrQuestions(Array.from(selectedQuestions));
  };

  return (
    <>
      <Form
        maxQuestions={questions.length}
        qtyQuestions={sliderValue}
        onSliderChange={handleSliderChange}
        onClick={handleClick}
      />
      <QuizList questions={currQuestions} />
    </>
  );
}

export default App;
