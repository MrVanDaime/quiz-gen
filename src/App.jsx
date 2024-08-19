import { useEffect, useState } from "react";

import Form from "./components/Form";
import questionsData from "./data/questions";
import QuizList from "./components/QuizList";
import { getShuffledQuestions } from "./utils/questionsUtils";

function App() {
  const [sliderValue, setSliderValue] = useState(1);
  const [allQuestions, setAllQuestions] = useState([]);
  const [currQuestions, setCurrQuestions] = useState([]);
  const [currSubject, setCurrSubject] = useState("any");
  const [maxQuestions, setMaxQuestions] = useState(0);

  // Setup questions
  useEffect(() => {
    setAllQuestions(questionsData);
    setMaxQuestions(questionsData.length);
  }, []);

  // Handle for slider value change
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  // Handle for subject change
  const handleSubjectChange = (value) => {
    const subject = value || "any";

    let result =
      subject === "any"
        ? allQuestions
        : allQuestions.filter((q) => q.subject === subject);

    setCurrSubject(subject);
    setMaxQuestions(result.length);
    setSliderValue(1);
  };

  // Handle for clicking to update questions
  const handleClick = () => {
    setCurrQuestions(
      getShuffledQuestions(allQuestions, currSubject, sliderValue)
    );
  };

  return (
    <>
      <Form
        maxQuestions={maxQuestions}
        qtyQuestions={sliderValue}
        onSliderChange={handleSliderChange}
        onClick={handleClick}
        onSubjectChange={handleSubjectChange}
      />
      <QuizList questions={currQuestions} />
    </>
  );
}

export default App;
