import NachvContent from "./nachvContent";

export type NachvLoadable<T> = NachvContent<T> & { loading: boolean }

export default NachvLoadable;