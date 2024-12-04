import { RegistrationContext } from "../context/registration-context";
import { RegistrationState } from "../interfaces/registration-state";

export abstract class BaseRegistrationState implements RegistrationState {
    protected context!: RegistrationContext;

    setContext(context: RegistrationContext): void {
        this.context = context;
    }

    nextStage(): void {
        console.log("This operation is not available in the current stage.");
    }

    previousStage(): void {
        console.log("This operation is not available in the current stage.");
    }

    abstract showDetails(): void;
}