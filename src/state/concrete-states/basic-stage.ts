import { BaseRegistrationState } from "../common/base-registration-state";
import { ContactStage } from "./contact-stage";

export class BasicStage extends BaseRegistrationState {
  showDetails(): void {
    console.log("Basic Stage: Fill in personal information.");
  }

  nextStage(): void {
    console.log("Moving to Contact Stage.");
    this.context.setState(new ContactStage());
  }
}