import { FolgenLoadable } from "./folgenLoadable";
import FolgenType from "./folgenType";
import { FolgenValue } from "./folgenValue";
import { FolgenVerifiable } from "./folgenVerifiable";

export class folgen {

    private constructor() {
    }

    //

    public static loading = { loading : true } as FolgenLoadable;

    public static verifiable = { verified : false } as FolgenVerifiable;

    //

    public static value<T = any, R extends FolgenType[] = FolgenType[]>(content: T | undefined, ...rest: R): FolgenValue<T, R> {
        const mergedRest = Object.assign({}, ...rest);
        return { content, ...mergedRest } as FolgenValue<T, R>;
    }
}

export default folgen;

//

export type { FolgenType } from "./folgenType";
export type { FolgenLoadable } from "./folgenLoadable";
export type { FolgenVerifiable } from "./folgenVerifiable";