import { PasswordHandler } from "../handlers/password-handler";

export class LowercaseHandler extends PasswordHandler {
    handle(password: string): string {
        password += this.generateLowercase();
        return super.handle(password);
    }

    private generateLowercase(): string {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        return letters[Math.floor(Math.random() * letters.length)];
    }
}