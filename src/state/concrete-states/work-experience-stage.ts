import { BaseRegistrationState } from "../common/base-registration-state";
import { ContactStage } from "./contact-stage";

export class WorkExperienceStage extends BaseRegistrationState {
    showDetails(): void {
        console.log("Work Experience Stage: Add your work experience.");
    }

    previousStage(): void {
        console.log("Returning to Contact Stage.");
        this.context.setState(new ContactStage());
    }
}