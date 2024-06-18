import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function QuizList({ questions }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const difficulty = {
    easy: {
      itemBg: "#198754",
      panelBg: "#116840",
    },
    moderate: {
      itemBg: "#ffa001",
      panelBg: "#cd8000",
    },
    hard: {
      itemBg: "#c72827",
      panelBg: "#a92222",
    },
  };

  useEffect(() => {
    setOpenIndex(-1);
  }, [questions]);

  return (
    <Accordion index={openIndex} allowToggle>
      {questions.map((question, index) => (
        <AccordionItem
          key={question.id}
          backgroundColor={difficulty[question.difficulty].itemBg}
        >
          <AccordionButton onClick={() => setOpenIndex(index)}>
            <Box as="span" flex="1" textAlign="left">
              <b>{question.question}</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            backgroundColor={difficulty[question.difficulty].panelBg}
          >
            {question.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
