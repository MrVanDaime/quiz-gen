import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Heading,
  Select,
  Flex,
} from "@chakra-ui/react";

export default function Form({
  maxQuestions,
  qtyQuestions,
  onSliderChange,
  onClick,
  onSubjectChange,
}) {
  return (
    <>
      <Heading mb={5}>Choose the amount of questions</Heading>
      <Flex justify="center">
        <Select
          onChange={(val) => onSubjectChange(val.target.value)}
          isRequired={true}
          placeholder="Select subject"
          width="auto"
          mb={3}
        >
          <option value="any">Any</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
          <option value="sql">SQL</option>
          <option value="php">PHP</option>
        </Select>
      </Flex>
      <Slider
        mb={3}
        aria-label="total-questions"
        value={qtyQuestions}
        min={1}
        max={maxQuestions}
        onChange={(val) => onSliderChange(val)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      {qtyQuestions > 0 && (
        <Button onClick={onClick} mb={3}>
          Generate {qtyQuestions}
        </Button>
      )}
    </>
  );
}
