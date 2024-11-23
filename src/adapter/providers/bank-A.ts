export class BankA {
    getRates(): { [key: string]: number } {
        return { USD: 1.1, EUR: 0.9, GBP: 0.8 };
    }
}