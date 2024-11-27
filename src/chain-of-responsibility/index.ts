import { LowercaseHandler } from "./concrete-handler/lowercase-handler";
import { NumberHandler } from "./concrete-handler/number-handler";
import { SpecialCharacterHandler } from "./concrete-handler/special-character-handler";
import { UppercaseHandler } from "./concrete-handler/uppercase-handler";

const lowercaseHandler = new LowercaseHandler();
const uppercaseHandler = new UppercaseHandler();
const numberHandler = new NumberHandler();
const specialCharHandler = new SpecialCharacterHandler();

// Build the chain of responsibility
lowercaseHandler.setNext(uppercaseHandler)
    .setNext(numberHandler)
    .setNext(specialCharHandler);

// Start the chain
const initialPassword = "";
const generatedPassword = lowercaseHandler.handle(initialPassword);
console.log("Generated Password:", generatedPassword);