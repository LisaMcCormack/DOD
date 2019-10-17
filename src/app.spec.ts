import DOD from "./app";

it("when user answers y it asks the next question", async () => {
  const prompt = jest.fn().mockResolvedValue("y");
  const consolelog = jest.fn();
  const questions = ["how are you?", "will this work?"];
  await DOD(prompt, consolelog, questions);

  expect(prompt).toBeCalledWith(questions[1]);
});

it("prints out any tasks to complete at the end of the program", async () => {
  const prompt = jest.fn().mockResolvedValue("n");
  const consolelog = jest.fn();
  const questions = [
    "how are you? ",
    "will this work? ",
    "how's the weather today? "
  ];
  await DOD(prompt, consolelog, questions);
  expect(consolelog).toBeCalledWith(
    `Tasks yet to be completed: ${questions}`
  );
});

it("asks the same question again if user accidentally types character that is not n or y", async () => {
  let prompt = jest.fn()
      .mockResolvedValueOnce("x")
      .mockResolvedValue("y");

  const consolelog = jest.fn();
  const questions = ["how are you? ", "will this work? "];

  await DOD(prompt, consolelog, questions);
  expect(consolelog).toBeCalledWith("All checks passed");
});

it("will print out the task that was not completed", async () => {
  let prompt = jest.fn()
      .mockResolvedValueOnce("n")
      .mockResolvedValue("y");

  const consolelog = jest.fn();
  const questions = ["how are you? ", "will this work? "];

  await DOD(prompt, consolelog, questions);
  expect(consolelog).toBeCalledWith("Tasks yet to be completed: how are you? ");
});

