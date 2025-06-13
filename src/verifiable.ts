import ganz from "./ganz";
import Loadable, { LoadableWrapper } from "./loadable";

export type Verifiable<T> = Loadable<T> & { verified: boolean };

export default Verifiable;

//

export class VerifiableWrapper<T, G extends Verifiable<T> = Verifiable<T>> extends LoadableWrapper<T, G> {

    constructor(g: G) {
        super(g);
        this.g = g;
    }

    public verified(verified: boolean = true): this {
        ganz.setVerified(this.g, verified);  
        return this;
    }
}