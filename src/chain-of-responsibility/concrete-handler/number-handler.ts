import { PasswordHandler } from "../handlers/password-handler";

export class NumberHandler extends PasswordHandler {
    handle(password: string): string {
        password += this.generateNumber();
        return super.handle(password);
    }

    private generateNumber(): string {
        return Math.floor(Math.random() * 10).toString();
    }
} 