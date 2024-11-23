import { CurrencyRate } from "../interfaces/currency-rate";
import { CurrencyRateAdapter } from "../interfaces/currency-rate-adapter";
import { BankB } from "../providers/bank-B";

export class BankBAdapter implements CurrencyRateAdapter {
    private bankB: BankB;

    constructor(bankB: BankB) {
        this.bankB = bankB;
    }

    getFormattedRates(): CurrencyRate[] {
        const rates = this.bankB.getRates();
        return rates.map((rate) => ({
            currency: rate.code,
            rate: rate.value,
        }));
    }
}