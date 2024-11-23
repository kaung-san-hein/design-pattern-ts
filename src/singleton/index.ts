class AssetManager {
    private static instance: AssetManager;

    private textAssets: Map<string, string>;
    private modelAssets: Map<string, string>;
    private soundAssets: Map<string, string>;

    private constructor() {
        this.textAssets = new Map();
        this.modelAssets = new Map();
        this.soundAssets = new Map();
    }

    // Get the single instance of AssetManager
    public static getInstance(): AssetManager {
        if (!AssetManager.instance) {
            AssetManager.instance = new AssetManager();
        }
        return AssetManager.instance;
    }

    // Load text asset
    public loadText(name: string, content: string): void {
        this.textAssets.set(name, content);
    }

    public getText(name: string): string | undefined {
        return this.textAssets.get(name);
    }

    // Load model asset
    public loadModel(name: string, model: string): void {
        this.modelAssets.set(name, model);
    }

    public getModel(name: string): string | undefined {
        return this.modelAssets.get(name);
    }

    // Load sound asset
    public loadSound(name: string, url: string): void {
        this.soundAssets.set(name, url);
    }

    public playSound(name: string): string | undefined {
        return this.soundAssets.get(name)
    }
}

// Usage Example
const assetManager = AssetManager.getInstance();

assetManager.loadText("introText", "Welcome to the game!");
assetManager.loadModel("playerModel", "Creating player model");
assetManager.loadSound("backgroundMusic", "Playing music");

console.log(assetManager.getText("introText")); // Output: "Welcome to the game!"
console.log(assetManager.getModel("playerModel")); // Output: "Creating player model"
console.log(assetManager.playSound("backgroundMusic")) // Output: "Playing music"
