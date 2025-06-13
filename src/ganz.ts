import Loadable from "./loadable";
import Verifiable from "./verifiable";

export class ganz {
    private constructor() {}

    //

    public static loadable<T>(content: T | null): Loadable<T> {
        return {
            content,
            loading: false
        };
    }

    public static verifiable<T>(content: T | null): Verifiable<T> {
        return {
            content,
            loading: false,
            verified: false
        };
    }

    //

    public static setLoading<T>(obj: Loadable<T>, loading: boolean = true) {
        obj.loading = loading;
    }

    public static setVerified<T>(obj: Verifiable<T>, verified: boolean = true) {
        obj.verified = verified;

        if (verified) {
            obj.loading = false;
        }
    }
}

export default ganz;

//

export type { Content } from "./content";
export type { Loadable } from "./loadable";
export type { Verifiable } from "./verifiable";