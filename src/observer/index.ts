import { Achievements } from "./concrete-observers/achievements";
import { Analytics } from "./concrete-observers/analytics";
import { Scoreboard } from "./concrete-observers/scoreboard";
import { Game } from "./concrete-subjects/game";

const game = new Game();

const scoreboard = new Scoreboard();
const achievements = new Achievements();
const analytics = new Analytics();

// Subscribe observers
game.subscribe(scoreboard);
game.subscribe(achievements);
game.subscribe(analytics);

// Change score
game.setScore(50); // All observers are notified
game.setScore(150); // Achievements observer reacts to score >= 100

// Unsubscribe an observer
game.subscribe(scoreboard);
game.setScore(200); // Scoreboard will no longer be notified