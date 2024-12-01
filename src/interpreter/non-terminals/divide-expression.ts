import { Expression } from "../interfaces/expression";

export class DivideExpression implements Expression {
    constructor(private left: Expression, private right: Expression) { }

    interpret(): number {
        const rightValue = this.right.interpret();
        if (rightValue === 0) {
            throw new Error("Division by zero");
        }
        return this.left.interpret() / rightValue;
    }
}