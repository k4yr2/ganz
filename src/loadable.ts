import GanzContent from "./content";

export type GanzLoadable<T> = GanzContent<T> & { loading: boolean }

export default GanzLoadable;