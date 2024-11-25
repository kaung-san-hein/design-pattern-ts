import { AirConditioningService } from "../services/air-conditioning";
import { LightService } from "../services/light";
import { MusicService } from "../services/music";

export class SmartHomeFacade {
    private lightService: LightService;
    private musicService: MusicService;
    private airConditioningService: AirConditioningService;

    constructor() {
        this.lightService = new LightService();
        this.musicService = new MusicService();
        this.airConditioningService = new AirConditioningService();
    }

    startPartyMode(): void {
        console.log("Starting Party Mode...");
        this.lightService.turnOn();
        this.musicService.playMusic();
        this.airConditioningService.turnOn();
        this.airConditioningService.setTemperature(22);
        console.log("Party Mode is ON!");
    }

    stopPartyMode(): void {
        console.log("Stopping Party Mode...");
        this.musicService.stopMusic();
        this.lightService.turnOff();
        this.airConditioningService.turnOff();
        console.log("Party Mode is OFF!");
    }
}
