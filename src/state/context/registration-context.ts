import { RegistrationState } from "../interfaces/registration-state";

export class RegistrationContext {
    private currentState!: RegistrationState;

    constructor(initialState: RegistrationState) {
        this.setState(initialState);
    }

    setState(state: RegistrationState): void {
        this.currentState = state;
        this.currentState.setContext(this);
    }

    nextStage(): void {
        this.currentState.nextStage();
    }

    previousStage(): void {
        this.currentState.previousStage();
    }

    showStageDetails(): void {
        this.currentState.showDetails();
    }
}