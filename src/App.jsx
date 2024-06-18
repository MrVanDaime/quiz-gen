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
    let filterQuestions = [];
    while (filterQuestions.length < sliderValue) {
      let index = Math.floor(Math.random() * questions.length);
      if (!filterQuestions.includes(questions[index])) {
        filterQuestions.push(questions[index]);
      }
    }

    setCurrQuestions(filterQuestions);
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
