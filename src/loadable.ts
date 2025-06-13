import GanzContent from "./nachvContent";

export type GanzLoadable<T> = GanzContent<T> & { loading: boolean }

export default GanzLoadable;