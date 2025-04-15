import Button from "./ui/Button";
import { Text } from "./ui/Text";

export default function QuestionTitle() {
  return (
    <div className="pt-14 md:pt-0 md:w-1/4">
      <Text
        variant="3xl"
        weight="extrabold"
        className="mb-4 md:mb-8 text-indigo-950"
      >
        Got a question?
      </Text>
      <Button
        variant="primary"
        size="default"
        className="rounded-xl text-white"
      >
        Contact with us
      </Button>
    </div>
  );
}
