import app from "./app";
import { prompt } from "./cli";
const questions = [
    "It is live and can be used ",
    "It is well - & appropriately - tested ",
    "It has appropriate metrics / logging ",
    "It can be demo'd to a non-technical stakeholder ",
    "It is appropriately documented ",
    "You are happy with the code ",
    "Someone else is happy with the code ",
    "The team can run the code ",
    "Everybody is happy with the feature ",
    "It is sufficiently accessible ",
    "It is multi-lingual ",
    "It is appropriately performant (server & client side) ",
    "It works on all supported browsers ",
    "It is responsive ",
    "It has analytics ",
    "New logs added are clear and actionable",
    "A video of the feature has been made and shared "
];
app(prompt, console.log, questions)

