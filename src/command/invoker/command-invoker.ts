import { Command } from "../interfaces/command";

export class CommandInvoker {
    private history: Command[] = [];

    executeCommand(command: Command) {
        command.execute();
        this.history.push(command);
    }

    undoLastCommand() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        } else {
            console.log("No commands to undo");
        }
    }
}
