import { CurrencyRate } from "../interfaces/currency-rate";
import { CurrencyRateAdapter } from "../interfaces/currency-rate-adapter";
import { BankA } from "../providers/bank-A";

export class BankAAdapter implements CurrencyRateAdapter {
    private bankA: BankA;

    constructor(bankA: BankA) {
        this.bankA = bankA;
    }

    getFormattedRates(): CurrencyRate[] {
        const rates = this.bankA.getRates();
        return Object.keys(rates).map((key) => ({
            currency: key,
            rate: rates[key as keyof typeof rates],
        }));
    }
}