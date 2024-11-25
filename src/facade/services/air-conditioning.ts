export class AirConditioningService {
    turnOn(): void {
        console.log("Air Conditioning is ON.");
    }

    turnOff(): void {
        console.log("Air Conditioning is OFF.");
    }

    setTemperature(temp: number): void {
        console.log(`Temperature is set to ${temp}°C.`);
    }
}