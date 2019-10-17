import { prompt } from "./cli";

type Prompter = typeof prompt;

type Logger = typeof console.log;

export default async function(
  p: Prompter,
  logger: Logger,
  questions: string[]
) {
  const notComplete: string[] = []

  for (let i = 0; i < questions.length; i++) {
    const answer = await p(questions[i]);

    if (answer === "n") {
      notComplete.push(questions[i]);
    }
    if (answer !== "y" && answer !== "n") {
      i--;
    }
  }

  if (notComplete.length === 0 ) {
    logger("All checks passed");
  } else {
    logger(`Tasks yet to be completed: ${notComplete}`)
  }

}
