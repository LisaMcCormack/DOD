import DOD from "./app";

let colors = require('colors');

describe('DOD', () => {
  it("when user answers y it asks the next question", async () => {
    const prompt = jest.fn().mockResolvedValue("y");
    const consolelog = jest.fn();
    const questions = ["how are you?", "will this work?"];
    await DOD(prompt, consolelog, questions);

    expect(prompt).toBeCalledWith(`${questions[1]}(y/n) `);
  });

  it("prints out any tasks to complete at the end of the program", async () => {
    const prompt = jest.fn().mockResolvedValue("n");
    const consolelog = jest.fn();
    const colors = require('colors')
    const questions = [
      "how are you? ",
      "will this work? ",
      "how's the weather today? "
    ];
    await DOD(prompt, consolelog, questions);
    expect(consolelog).toBeCalledWith(
      colors.green(questions.join('\n')))
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
    const colors = require('colors')
    const questions = ["how are you? ", "will this work? "];

    await DOD(prompt, consolelog, questions);
    expect(consolelog).toBeCalledWith(
        colors.green('how are you? '));
  });
});

