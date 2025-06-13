import FolgenContent from "./folgenContent";
import NachvLoadable from "./nachvLoadable";
import NachvVerifiable from "./nachvVerifiable";

export class folgen<T = any, C extends FolgenContent<T> = FolgenContent<T>> {

    public constructor(public content : C) {
    }

    public get value(): T | null {
        return this.content.value;
    }

    //

    public async do(fn : (content : C) => Promise<void>): Promise<folgen<T, C>>{
        if (this.content.value === null) {
            throw new Error("Cannot perform operation on null value");
        }

        await fn(this.content);
        return this;
    }

    //

    public static loadable<T>(value: T | null): folgen<T, NachvLoadable<T>> {
        return new folgen<T, NachvLoadable<T>>({ value, loading: false });
    }

    public static verifiable<T>(value: T | null): folgen<T, NachvVerifiable<T>> {
        return new folgen<T, NachvVerifiable<T>>({ value, loading: false, verified: false });
    }

    //

    public static setLoading<T, G extends NachvLoadable<T>>(obj: G, loading: boolean = true) {
        obj.loading = loading;
    }

    public static setVerified<T, G extends NachvVerifiable<T>>(obj: G, verified: boolean = true) {
        obj.verified = verified;

        if (verified) {
            obj.loading = false;
        }
    }
}

export default folgen;

//

export type { FolgenContent } from "./folgenContent";
export type { NachvLoadable } from "./nachvLoadable";
export type { NachvVerifiable } from "./nachvVerifiable";