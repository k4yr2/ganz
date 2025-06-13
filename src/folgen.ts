import { FolgenContent } from "./folgenContent";
import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";

export class folgen {

    private constructor() {
    }

    public static loadable<T>(content: FolgenContent<T>): FolgenLoadable<T> {
        return new FolgenLoadable<T>(content);
    }

    public static verifiable<T>(content: FolgenContent<T>): FolgenVerifiable<T> {
        return new FolgenVerifiable<T>(content);
    }

    //
}

export default folgen;

//

export type { FolgenContent } from "./folgenContent";
export { FolgenBase } from "./folgenBase";
export { FolgenLoadable } from "./folgenLoadable";
export { FolgenVerifiable } from "./folgenVerifiable";