// Define the Handler interface
export abstract class PasswordHandler {
    protected nextHandler?: PasswordHandler;

    // Set the next handler in the chain
    setNext(handler: PasswordHandler): PasswordHandler {
        this.nextHandler = handler;
        return handler;
    }

    // Handle the request or pass it to the next handler
    handle(password: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(password);
        }
        return password;
    }
}