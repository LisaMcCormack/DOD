import { prompt } from "./cli";

const colors = require("colors");



type Prompter = typeof prompt;

type Logger = typeof console.log;

export default async function(p: Prompter, logger: Logger, questions: string[]){
  for (let i = 0; i < questions.length;){
    const answer = await p(questions[i]);
    if (answer === "y") {
      logger("All checks passed");
      i++
    } else {
      logger("All checks not passed");
    }
  }

  //
  //   let i = 0
  //   for (i = 0; i < questions.length;) {
  //   try {
  //
  //       // const answer = await p(questions[i])
  //       const answer = await p(questions[i])
  //        if ( answer === 'y') {
  //         i++
  //   }
  //
  //   } catch (e) {
  //       console.log(e)
  //   }
  // }

  /*
export default async function (p: Prompter = prompt, logger: Logger = console.log) {
       let answer = ''
       answer = await p("Tell me to shout something")
       logger(answer.toUpperCase())
*/

  //   let answer = ''
  //   let i = 0
  //   for (i = 0; i < questions.length;) {
  //   try {
  //
  //       answer = await prompt(questions[i])
  //       if (answer === 'n') {
  //         console.log(colors.blue('Consider creating a subtask to complete story'))
  //         process.exit(0)
  //       }  if (answer !== 'y' && answer !== 'n') {
  //         await prompt(questions[i])
  //         i++
  //       } if ( i === questions.length - 1 ) {
  //         console.log(colors.green('You have completed the story! :D'))
  //         process.exit(0)
  //       } if ( answer === 'y') {
  //         i++
  //       }
  //
  //   } catch (e) {
  //       console.log(e)
  //   }
  // }
}
