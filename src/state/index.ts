import { BasicStage } from "./concrete-states/basic-stage";
import { RegistrationContext } from "./context/registration-context";

const registration = new RegistrationContext(new BasicStage());

registration.showStageDetails(); // Basic Stage: Fill in personal information.
registration.nextStage();

registration.showStageDetails(); // Contact Stage: Provide contact details.
registration.nextStage();

registration.showStageDetails(); // Work Experience Stage: Add your work experience.
registration.previousStage();

registration.showStageDetails(); // Contact Stage: Provide contact details.