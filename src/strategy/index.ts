import { BlackAndWhiteFilter } from "./concrete-strategies/black-and-white-filter";
import { BoostFilter } from "./concrete-strategies/boost-filter";
import { SepiaFilter } from "./concrete-strategies/sepia-filter";
import { ImageEditor } from "./context/image-editor";

const image = "photo.jpg";

const editor = new ImageEditor(new SepiaFilter());
editor.applyFilter(image); // Applying Sepia filter to photo.jpg

editor.setFilter(new BlackAndWhiteFilter());
editor.applyFilter(image); // Applying Black and White filter to photo.jpg

editor.setFilter(new BoostFilter());
editor.applyFilter(image); // Applying Boost filter to photo.jpg