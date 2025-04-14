import { RandomColorHand, Label1, Label2, Label3 } from "../icons";
import { Text } from "./ui/Text";

export default function WorkFlowSection() {
  const workflowSteps = [
    {
      icon: <Label1 />,
      title: "Grammar rules and examples",
      description:
        "Submit as many design tasks as you need without worrying about individual project fees. ",
    },
    {
      icon: <Label2 />,
      title: "Grammar rules and examples",
      description:
        "Submit as many design tasks as you need without worrying about individual project fees. ",
    },
    {
      icon: <Label3 />,
      title: "Grammar rules and examples",
      description:
        "Submit as many design tasks as you need without worrying about individual project fees. ",
    },
  ];
  return (
    <div className="pb-14 sm:pb-16 pt-0 sm:pt-20">
      <div className="bg-orange-100/50 rounded-4xl px-3.5 sm:px-14 py-7 sm:py-16">
        <div className="flex justify-between relative">
          <div className="text-left max-w-none sm:max-w-md">
            <Text
              variant="3xl"
              weight="extrabold"
              className="pb-5 text-indigo-950 max-w-[154px] sm:max-w-none"
            >
              How Does it Work?
            </Text>
            <Text
              variant="base"
              weight="medium"
              className="text-zinc-600 tracking-3"
            >
              Word Squared to help you with all of your word problems and
              questions. From dictionaries and definitions to powerful word.
            </Text>
          </div>
          <div className="-mt-24 md:-mt-36 pr-0 md:pr-16 absolute md:relative right-0 top-7 md:top-2.5 rotate-[9deg] md:rotate-0">
            <RandomColorHand className="w-[120px] h-[97px] md:w-full md:h-auto" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row pt-12 sm:pt-16 gap-8">
          {workflowSteps.map((workflow) => (
            <div key={workflow.icon}>
              <div>{workflow.icon}</div>
              <div className="pt-4 sm:pt-7">
                <Text variant="base" weight="bold" className="text-indigo-950">
                  {workflow.title}
                </Text>
                <Text
                  variant="sm"
                  weight="medium"
                  className="pt-2 sm:pt-3 text-zinc-600"
                >
                  {workflow.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
