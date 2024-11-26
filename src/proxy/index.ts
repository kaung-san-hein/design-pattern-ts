import { ProxyImageGenerator } from "./proxy-classes/proxy-image-generator";
import { ImageGenerator } from "./real/image-generator";

const realGenerator = new ImageGenerator();
const proxyGenerator = new ProxyImageGenerator(realGenerator);

try {
    console.log(proxyGenerator.generateImage("sunset over the ocean"));
    console.log(proxyGenerator.generateImage("sunset over the ocean")); // Cached result

    // Simulate a rapid request to test rate limiting
    console.log(proxyGenerator.generateImage("forest trail")); // Throws rate limit error
} catch (error) {
    console.error(error.message);
}