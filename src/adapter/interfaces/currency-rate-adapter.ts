import { CurrencyRate } from "./currency-rate";

export interface CurrencyRateAdapter {
    getFormattedRates(): CurrencyRate[];
}