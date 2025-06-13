import { FolgenType } from "./folgenType";
import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";
import { FolgenUnion } from "./folgenUnion";
import { FolgenValue } from "./folgenValue";

export class folgen {

    static #defaultMap : Map<string, FolgenType> = new Map<string, FolgenType>([
        ["loadable", { loading: false } as FolgenLoadable],
        ["verifiable", { verified: false } as FolgenVerifiable]
    ]);

    private constructor() {
    }

    //

    public static loadable<T extends number>(content: T) {
        return { content, loading: false } as FolgenValue<T, FolgenLoadable>;
    }

    public static verifiable<T>(content: T) {
        return { content, verified: false } as FolgenValue<T, FolgenVerifiable>;
    }

    public static union<T, U extends FolgenType[]>(content: T){
        return { content } as FolgenValue<T, FolgenUnion<U>>;
    }

    //
}

export default folgen;

//

export type { FolgenType } from "./folgenType";
export type { FolgenLoadable } from "./folgenLoadable";
export type { FolgenVerifiable } from "./folgenVerifiable";