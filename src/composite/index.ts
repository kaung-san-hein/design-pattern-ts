import { CompositeTextGenerator } from "./composite-classes/composite-text-generator";
import { ArrayGenerator } from "./leaf-components/array-generator";
import { RangeGenerator } from "./leaf-components/range-generator";
import { StringGenerator } from "./leaf-components/string-generator";

// Create leaf generators
const stringGen = new StringGenerator("Hello, World!");
const arrayGen = new ArrayGenerator(["Alice", "Bob", "Charlie"]);
const rangeGen = new RangeGenerator(1, 5);

// Create a composite generator
const compositeGen = new CompositeTextGenerator();
compositeGen.add(stringGen);
compositeGen.add(arrayGen);
compositeGen.add(rangeGen);

// Generate the combined text
console.log(compositeGen.generateText());
