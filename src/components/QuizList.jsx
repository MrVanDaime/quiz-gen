import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const difficultyColors = {
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

export default function QuizList({ questions }) {
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    setOpenIndex(-1);
  }, [questions]);

  const handleAccordionButtonClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <Accordion index={openIndex} allowToggle>
      {questions.map((question, index) => {
        const { itemBg, panelBg } = difficultyColors[question.difficulty];

        return (
          <AccordionItem key={question.id} backgroundColor={itemBg}>
            <AccordionButton onClick={() => handleAccordionButtonClick(index)}>
              <Box as="span" flex="1" textAlign="left">
                <b>{question.question}</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel backgroundColor={panelBg}>
              {question.answer}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
