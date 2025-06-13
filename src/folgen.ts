import { FolgenLoadable } from "./folgenLoadable";
import { FolgenVerifiable } from "./folgenVerifiable";

export class folgen {

    private constructor() {
    }

    //

    public static loading = { loading : true } as FolgenLoadable;

    public static verifiable = { verified : false } as FolgenVerifiable;
}

export default folgen;

//

export type { FolgenType } from "./folgenType";
export type { FolgenLoadable } from "./folgenLoadable";
export type { FolgenVerifiable } from "./folgenVerifiable";