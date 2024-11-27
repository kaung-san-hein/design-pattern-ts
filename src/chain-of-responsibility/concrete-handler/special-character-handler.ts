import { PasswordHandler } from "../handlers/password-handler";

export class SpecialCharacterHandler extends PasswordHandler {
    handle(password: string): string {
        password += this.generateSpecialCharacter();
        return super.handle(password);
    }

    private generateSpecialCharacter(): string {
        const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
        return specialChars[Math.floor(Math.random() * specialChars.length)];
    }
}