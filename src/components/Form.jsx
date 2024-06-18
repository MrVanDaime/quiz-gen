import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function Form({
  maxQuestions,
  qtyQuestions,
  onSliderChange,
  onClick,
}) {
  return (
    <>
      <Heading mb={5}>Choose the amount of questions</Heading>
      <Slider
        mb={3}
        aria-label="total-questions"
        defaultValue={1}
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
        <Button mb={5} onClick={onClick}>
          Generate {qtyQuestions}
        </Button>
      )}
    </>
  );
}
