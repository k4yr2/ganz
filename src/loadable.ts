import GanzContent from "./content";

export type Loadable<T> = GanzContent<T> & { loading: boolean }

export default Loadable;