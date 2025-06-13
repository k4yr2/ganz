import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";

export class folgen {

    private constructor() {
    }

    public static loadable<T>(content: T | null): FolgenLoadable<T> {
        return new FolgenLoadable<T>(content);
    }

    public static verifiable<T>(content: T | null): FolgenVerifiable<T> {
        return new FolgenVerifiable<T>(content);
    }

    //
}

export default folgen;

//

export abstract class FolgenBase<T> {
    protected constructor(public content: T | null) {
    }
}