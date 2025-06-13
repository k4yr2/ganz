import GanzContent from "./content";
import GanzLoadable from "./loadable";
import GanzVerifiable from "./verifiable";

export class nachv<T = any, C extends GanzContent<T> = GanzContent<T>> {

    public constructor(public content : C) {
    }

    public get value(): T | null {
        return this.content.value;
    }

    //

    public async do(fn : (content : C) => Promise<void>): Promise<nachv<T, C>>{
        if (this.content.value === null) {
            throw new Error("Cannot perform operation on null value");
        }

        await fn(this.content);
        return this;
    }

    //

    public static loadable<T>(value: T | null): nachv<T, GanzLoadable<T>> {
        return new nachv<T, GanzLoadable<T>>({ value, loading: false });
    }

    public static verifiable<T>(value: T | null): nachv<T, GanzVerifiable<T>> {
        return new nachv<T, GanzVerifiable<T>>({ value, loading: false, verified: false });
    }

    //

    public static setLoading<T, G extends GanzLoadable<T>>(obj: G, loading: boolean = true) {
        obj.loading = loading;
    }

    public static setVerified<T, G extends GanzVerifiable<T>>(obj: G, verified: boolean = true) {
        obj.verified = verified;

        if (verified) {
            obj.loading = false;
        }
    }
}

export default nachv;

//

export type { GanzContent as Content } from "./content";
export type { GanzLoadable as Loadable } from "./loadable";
export type { GanzVerifiable as Verifiable } from "./verifiable";