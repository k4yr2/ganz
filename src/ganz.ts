import Loadable, { LoadableWrapper } from "./loadable";
import Verifiable, { VerifiableWrapper } from "./verifiable";

export class ganz {
    private constructor() {}

    //

    public static loadable<T>(content: T | null): LoadableWrapper<T> {
        return new LoadableWrapper<T>({ content, loading: false });
    }

    public static verifiable<T>(content: T | null): VerifiableWrapper<T> {
        return new VerifiableWrapper<T>({ content, loading: false, verified: false });
    }

    //

    public static setLoading<T, G extends Loadable<T>>(obj: G, loading: boolean = true) {
        obj.loading = loading;
    }

    public static setVerified<T, G extends Verifiable<T>>(obj: G, verified: boolean = true) {
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