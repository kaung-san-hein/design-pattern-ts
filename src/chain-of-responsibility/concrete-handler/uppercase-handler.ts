import { PasswordHandler } from "../handlers/password-handler";

export class UppercaseHandler extends PasswordHandler {
    handle(password: string): string {
        password += this.generateUppercase();
        return super.handle(password);
    }

    private generateUppercase(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * letters.length)];
    }
}