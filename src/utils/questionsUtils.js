export const getShuffledQuestions = (questions, subject, sliderValue) => {
  const filteredQuestions =
    subject === "any"
      ? questions
      : questions.filter((question) => question.subject === subject);

  const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

  return shuffledQuestions.slice(0, sliderValue);
};