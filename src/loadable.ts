import Content, { ContentWrapper } from "./content";
import ganz from "./ganz";

export type Loadable<T> = Content<T> & { loading: boolean }

export default Loadable;

//

export class LoadableWrapper<T, G extends Loadable<T> = Loadable<T>> extends ContentWrapper<T, G> {

    constructor(g: G) {
        super(g);
    }

    public loading(loading: boolean = true) : this {
        ganz.setLoading(this.g, loading);
        return this;
    }
}