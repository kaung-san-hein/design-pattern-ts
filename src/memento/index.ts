import { GameHistory } from "./caretakers/game-history";
import { Game } from "./originators/game";

const game = new Game();
const history = new GameHistory();

// Set game state and save it
game.setState("Level 1");
history.addMemento(game.save());

game.setState("Level 2");
history.addMemento(game.save());

game.setState("Level 3");
history.addMemento(game.save());

// Restore a previous state
game.restore(history.getMemento(1)); // Restores to "Level 2"