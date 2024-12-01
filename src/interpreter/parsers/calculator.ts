import { Expression } from "../interfaces/expression";
import { AddExpression } from "../non-terminals/add-expression";
import { DivideExpression } from "../non-terminals/divide-expression";
import { MultiplyExpression } from "../non-terminals/multiply-expression";
import { SubtractExpression } from "../non-terminals/subtract-expression";
import { NumberExpression } from "../terminals/number-expression";

export class Calculator {
    private static operators: { [key: string]: (left: Expression, right: Expression) => Expression } = {
        '+': (left, right) => new AddExpression(left, right),
        '-': (left, right) => new SubtractExpression(left, right),
        '*': (left, right) => new MultiplyExpression(left, right),
        '/': (left, right) => new DivideExpression(left, right),
    };

    static parse(expression: string): Expression {
        const stack: Expression[] = [];
        const tokens = expression.split(' ');

        for (const token of tokens) {
            if (!isNaN(Number(token))) {
                stack.push(new NumberExpression(Number(token)));
            } else if (this.operators[token]) {
                const right = stack.pop();
                const left = stack.pop();

                if (!left || !right) {
                    throw new Error("Invalid expression");
                }

                console.log('Right ', right)
                console.log('Left ', left)
                console.log('Operators ', this.operators[token](left, right))

                stack.push(this.operators[token](left, right));
            } else {
                throw new Error(`Unknown token: ${token}`);
            }
        }

        if (stack.length !== 1) {
            throw new Error("Invalid expression");
        }

        return stack[0];
    }
}
