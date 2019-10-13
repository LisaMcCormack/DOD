import { prompt } from './cli'

const colors = require('colors');

const questions = ["It is live and can be used (y/n) ", "It is well - & appropriately - tested (y/n) ", "It has appropriate metrics / logging (y/n) ", "It can be demo'd to a non-technical stakeholder (y/n) ",
 "It is appropriately documented (y/n) ", "You are happy with the code (y/n) ", "Someone else is happy with the code (y/n) ", "The team can run the code (y/n) ", "Everybody is happy with the feature (y/n) ", "It is sufficiently accessible (y/n) ",
"It is multi-lingual (y/n) ", "It is appropriately performant (server & client side) (y/n) ", "It works on all supported browsers (y/n) ", "It is responsive (y/n) ", "It has analytics (y/n) ", "A video of the feature has been made and shared (y/n) "]

export default async function () {
    let answer = ''
    let i = 0
    for (i = 0; i < questions.length;) {
    try {

        answer = await prompt(questions[i])
        if (answer === 'n') {
          console.log(colors.blue('Consider creating a subtask to complete story'))
          process.exit(0)
        }  if (answer !== 'y' && answer !== 'n') {
          await prompt(questions[i])
          i++
        } if ( i === questions.length - 1 ) {
          console.log(colors.green('You have completed the story! :D'))
          process.exit(0)
        } if ( answer === 'y') {
          i++
        }

    } catch (e) {
        console.log(e)
    }
  }
}
