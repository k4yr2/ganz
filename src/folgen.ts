import { FolgenType } from "./folgenType";
import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";
import { FolgenUnion } from "./folgenUnion";

export class folgen {

    private constructor() {
    }

    public static loadable<T>(content: T): FolgenLoadable<T> {
        return { content, loading: false };
    }

    public static verifiable<T>(content: T): FolgenVerifiable<T> {
        return { content, verified: false };
    }

    public static union<T, U extends FolgenType<T>[]>(content: T) : FolgenUnion<U> {
        return { content } as FolgenUnion<U>;
    }

    //
}

export default folgen;

//

export type { FolgenType } from "./folgenType";
export type { FolgenLoadable } from "./folgenLoadable";
export type { FolgenVerifiable } from "./folgenVerifiable";