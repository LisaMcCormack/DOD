import app from "./app";
import { prompt } from "./cli";
const questions = [
    "It is live and can be used (y/n) ",
    "It is well - & appropriately - tested (y/n) ",
    "It has appropriate metrics / logging (y/n) ",
    "It can be demo'd to a non-technical stakeholder (y/n) ",
    "It is appropriately documented (y/n) ",
    "You are happy with the code (y/n) ",
    "Someone else is happy with the code (y/n) ",
    "The team can run the code (y/n) ",
    "Everybody is happy with the feature (y/n) ",
    "It is sufficiently accessible (y/n) ",
    "It is multi-lingual (y/n) ",
    "It is appropriately performant (server & client side) (y/n) ",
    "It works on all supported browsers (y/n) ",
    "It is responsive (y/n) ",
    "It has analytics (y/n) ",
    "A video of the feature has been made and shared (y/n) "
];
app(prompt, console.log, questions)

