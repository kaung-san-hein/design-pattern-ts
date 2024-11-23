export class BankB {
    getRates(): Array<{ code: string; value: number }> {
        return [
            { code: "USD", value: 1.2 },
            { code: "EUR", value: 0.85 },
            { code: "GBP", value: 0.78 },
        ];
    }
}