import NachvLoadable from "./nachvLoadable";

export type GanzVerifiable<T> = NachvLoadable<T> & { verified: boolean };

export default GanzVerifiable;