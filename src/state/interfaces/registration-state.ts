import { RegistrationContext } from "../context/registration-context";

export interface RegistrationState {
    setContext(context: RegistrationContext): void;
    nextStage(): void;
    previousStage(): void;
    showDetails(): void;
}