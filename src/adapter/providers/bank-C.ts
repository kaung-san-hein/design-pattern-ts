export class BankC {
    getRates(): Map<string, number> {
        return new Map([
            ["USD", 1.15],
            ["EUR", 0.88],
            ["GBP", 0.79],
        ]);
    }
}