import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";

export class folgen {

    private constructor() {
    }

    public static loadable<T>(content: T): FolgenLoadable<T> {
        return { content, loading: false };
    }

    public static verifiable<T>(content: T): FolgenVerifiable<T> {
        return { content, verified: false };
    }

    //
}

export default folgen;

//

export type { FolgenType } from "./folgenType";
export type { FolgenLoadable } from "./folgenLoadable";
export type { FolgenVerifiable } from "./folgenVerifiable";