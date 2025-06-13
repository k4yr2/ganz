import NachvLoadable from "./nachvLoadable";

export type NachvVerifiable<T> = NachvLoadable<T> & { verified: boolean };

export default NachvVerifiable;