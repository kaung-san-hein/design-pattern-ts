import { IImageGenerator } from "../interfaces/iimage-generator";
import { ImageGenerator } from "../real/image-generator";

// Proxy
export class ProxyImageGenerator implements IImageGenerator {
    private realSubject: ImageGenerator;
    private cache: Map<string, string> = new Map();
    private lastRequestTime: number = 0;
    private readonly RATE_LIMIT_INTERVAL = 5000; // 5 seconds
  
    constructor(realSubject: ImageGenerator) {
      this.realSubject = realSubject;
    }
  
    generateImage(prompt: string): string {
      // Check cache
      if (this.cache.has(prompt)) {
        console.log(`Cache hit for prompt: "${prompt}"`);
        return this.cache.get(prompt)!;
      }
  
      // Rate limiting
      const now = Date.now();
      if (now - this.lastRequestTime < this.RATE_LIMIT_INTERVAL) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
  
      // Forward request to the real subject
      const result = this.realSubject.generateImage(prompt);
  
      // Update cache and last request time
      this.cache.set(prompt, result);
      this.lastRequestTime = now;
  
      return result;
    }
  }
  