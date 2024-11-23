import { BankAAdapter } from "./adapter-classes/bank-A-adapter";
import { BankBAdapter } from "./adapter-classes/bank-B-adapter";
import { BankCAdapter } from "./adapter-classes/bank-C-adapter";
import { CurrencyRateAdapter } from "./interfaces/currency-rate-adapter";
import { BankA } from "./providers/bank-A";
import { BankB } from "./providers/bank-B";
import { BankC } from "./providers/bank-C";

// Usage
const bankA = new BankA();
const bankB = new BankB();
const bankC = new BankC();

const adapters: CurrencyRateAdapter[] = [
    new BankAAdapter(bankA),
    new BankBAdapter(bankB),
    new BankCAdapter(bankC),
];

adapters.forEach((adapter, index) => {
    console.log(`Rates from Bank ${index + 1}:`);
    console.log(adapter.getFormattedRates());
});