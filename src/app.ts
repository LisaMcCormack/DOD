import { prompt } from "./cli";

const colors = require("colors");

type Prompter = typeof prompt;

type Logger = typeof console.log;

export default async function(
  p: Prompter,
  logger: Logger,
  questions: string[],
  notComplete: string[] = []
) {
  for (let i = 0; i < questions.length; ) {
    const answer = await p(questions[i]);
    if (answer === "y") {
      if (i === questions.length - 1) {
        logger("All checks passed");
        i++
      } else {
        i++;
      }
    }
    if (answer === "n") {
      notComplete.push(questions[i]);
      i++;
    }
  }
}

