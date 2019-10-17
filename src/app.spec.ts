import DOD from "./app";

it("when user answers y it asks the next question", async () => {
  const prompt = jest.fn().mockResolvedValue("y");
  const consolelog = jest.fn();
  const questions = ["how are you?", "will this work?"];
  await DOD(prompt, consolelog, questions);

  expect(prompt).toBeCalledWith(questions[1]);
});

it("if the user answers no, it collects all the questions in an array", async () => {
  const prompt = jest.fn().mockResolvedValue("n");
  const consolelog = jest.fn();
  const questions = ["how are you?", "will this work?"];
  const notComplete: string[] = [];
  await DOD(prompt, consolelog, questions, notComplete);
  expect(notComplete.length).toEqual(2);
});

it("says all checks passed if user says y", async () => {
  const prompt = jest.fn().mockResolvedValue("y");
  const consolelog = jest.fn();
  const questions = [
    "how are you?",
    "will this work?",
    "how's the weather today?"
  ];
  await DOD(prompt, consolelog, questions);
  expect(consolelog).toBeCalledWith("All checks passed");
});

it("prints out any tasks to complete at the end of the program", async () => {
  const prompt = jest.fn().mockResolvedValue("n");
  const consolelog = jest.fn();
  const questions = [
    "how are you? ",
    "will this work? ",
    "how's the weather today? "
  ];
  const notComplete: string[] = [];
  await DOD(prompt, consolelog, questions, notComplete);
  expect(consolelog).toBeCalledWith(
    `Tasks yet to be completed: ${notComplete}`
  );
});

it("asks the same question again if user accidentally types character that is not n or y", async () => {
  let prompt = jest.fn().mockResolvedValueOnce("x");
  prompt = jest.fn().mockResolvedValue("y");

  const consolelog = jest.fn();
  const questions = ["how are you? ", "will this work? "];
  await DOD(prompt, consolelog, questions);
  await DOD(prompt, consolelog, questions);
  expect(consolelog).toBeCalledWith("All checks passed");
});
