import GanzLoadable from "./loadable";

export type Verifiable<T> = GanzLoadable<T> & { verified: boolean };

export default Verifiable;