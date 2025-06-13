import Loadable from "./loadable";
import Verifiable from "./verifiable";

export class ganz {
    private constructor() {}

    public static setLoading<T>(obj: Loadable<T>, loading: boolean = true) : Loadable<T> {
        obj.loading = loading;

        return obj;
    }

    public static setVerified<T>(obj: Verifiable<T>, verified: boolean = true) : Verifiable<T> {
        obj.verified = verified;

        if (verified) {
            obj.loading = false;
        }

        return obj;
    }
}

export default ganz;

//

export { Content } from "./content";
export { Loadable } from "./loadable";
export { Verifiable } from "./verifiable";