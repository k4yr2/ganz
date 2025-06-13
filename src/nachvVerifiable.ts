import FolgenLoadable from "./folgenLoadable";

export type NachvVerifiable<T> = FolgenLoadable<T> & { verified: boolean };

export default NachvVerifiable;