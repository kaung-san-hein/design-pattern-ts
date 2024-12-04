import { BaseRegistrationState } from "../common/base-registration-state";
import { BasicStage } from "./basic-stage";
import { WorkExperienceStage } from "./work-experience-stage";

export class ContactStage extends BaseRegistrationState {
    showDetails(): void {
        console.log("Contact Stage: Provide contact details.");
    }

    nextStage(): void {
        console.log("Moving to Work Experience Stage.");
        this.context.setState(new WorkExperienceStage());
    }

    previousStage(): void {
        console.log("Returning to Basic Stage.");
        this.context.setState(new BasicStage());
    }
}