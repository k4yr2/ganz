import GanzContent from "./content";
import GanzLoadable from "./loadable";
import Verifiable from "./verifiable";

export class ganz<T, C extends GanzContent<T>> {

    public constructor(public content : C) {
    }

    //

    public static loadable<T>(value: T | null): ganz<T, GanzLoadable<T>> {
        return new ganz<T, GanzLoadable<T>>({ value, loading: false });
    }

    public static verifiable<T>(value: T | null): ganz<T, Verifiable<T>> {
        return new ganz<T, Verifiable<T>>({ value, loading: false, verified: false });
    }

    //

    public static setLoading<T, G extends GanzLoadable<T>>(obj: G, loading: boolean = true) {
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

export type { GanzContent as Content } from "./content";
export type { GanzLoadable as Loadable } from "./loadable";
export type { Verifiable } from "./verifiable";