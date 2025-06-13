import Loadable from "./loadable";

export type Verifiable<T> = Loadable<T> & { verified: boolean };

export default Verifiable;