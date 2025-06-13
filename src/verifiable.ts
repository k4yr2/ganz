import GanzLoadable from "./loadable";

export type GanzVerifiable<T> = GanzLoadable<T> & { verified: boolean };

export default GanzVerifiable;