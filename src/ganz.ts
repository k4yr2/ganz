import Content from "./content";
import Loadable from "./loadable";
import Verifiable from "./verifiable";

export class ganz<T, G extends Content<T>> {

    public constructor(protected g : G) {
    }

    //

    public static loadable<T>(content: T | null): ganz<T, Loadable<T>> {
        return new ganz<T, Loadable<T>>({ content, loading: false });
    }

    public static verifiable<T>(content: T | null): ganz<T, Verifiable<T>> {
        return new ganz<T, Verifiable<T>>({ content, loading: false, verified: false });
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