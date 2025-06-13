import FolgenLoadable from "./folgenLoadable";

export class FolgenVerifiable<T> extends FolgenLoadable<T> {
    #verified: boolean = false;

    public constructor(content: T | null) {
        super(content);
    }

    public get verified(): boolean {
        return this.#verified;
    }

    public set verified(value: boolean) {
        if(this.#verified = value) {
            this.loading = false;
        }
    }
}

export default FolgenVerifiable;