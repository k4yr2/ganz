import { FolgenBase } from "./folgenBase";

export class FolgenLoadable<T> extends FolgenBase<T> {
    #loading: boolean = false;

    public constructor(content: T | null) {
        super(content);
    }
    
    public get loading(): boolean {
        return this.#loading;
    }

    public set loading(value: boolean) {
        this.#loading = value;
    }
}

export default FolgenLoadable;