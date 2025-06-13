import FolgenLoadable from "./folgenLoadable";

export type FolgenVerifiable<T> = FolgenLoadable<T> & { verified: boolean };

export default FolgenVerifiable;