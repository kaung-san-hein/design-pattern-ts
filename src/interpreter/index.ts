import { Calculator } from "./parsers/calculator";

const expression = "5 3 + 2 *"; // Equivalent to (5 + 3) * 2
const parsedExpression = Calculator.parse(expression);

console.log(`Result: ${parsedExpression.interpret()}`); // Output: Result: 16
