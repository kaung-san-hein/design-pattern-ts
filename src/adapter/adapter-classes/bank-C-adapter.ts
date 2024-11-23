import { CurrencyRate } from "../interfaces/currency-rate";
import { CurrencyRateAdapter } from "../interfaces/currency-rate-adapter";
import { BankC } from "../providers/bank-C";

export class BankCAdapter implements CurrencyRateAdapter {
    private bankC: BankC;

    constructor(bankC: BankC) {
        this.bankC = bankC;
    }

    getFormattedRates(): CurrencyRate[] {
        const rates = this.bankC.getRates();
        return Array.from(rates.entries()).map(([currency, rate]) => ({
            currency,
            rate,
        }));
    }
}