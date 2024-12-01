import { Expression } from "../interfaces/expression";

export class SubtractExpression implements Expression {
    constructor(private left: Expression, private right: Expression) { }

    interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }
}