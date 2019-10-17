import { prompt } from "./cli";

type Prompter = typeof prompt;

type Logger = typeof console.log;

export default async function(
  p: Prompter,
  logger: Logger,
  questions: string[],
  notComplete: string[] = []
) {
  for (let i = 0; i < questions.length; i++ ) {
    const answer = await p(questions[i]);
    if (answer === "y") {
      if (i === questions.length - 1) {
        logger("All checks passed");
      }
    }
    if (answer === "n") {
      notComplete.push(questions[i]);
    }
    if (i === questions.length - 1) {
      if (notComplete.length > 0) {
        logger(`Tasks yet to be completed: ${notComplete}`)
      }
    }

  }
}

