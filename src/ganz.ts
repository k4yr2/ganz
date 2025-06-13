import Loadable from "./loadable";
import Verifiable from "./verifiable";

export class ganz {
    private constructor() {}

    //

    public static loadable<T>(content: T | null, loading: boolean = true): Loadable<T> {
        return {
            content,
            loading
        };
    }

    public static verifiable<T>(content: T | null, verified: boolean = false, loading: boolean = true): Verifiable<T> {
        return {
            content,
            loading,
            verified
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