import { FolgenType } from "./folgenType";

export type FolgenLoadable<T> = FolgenType<T, "loadable"> & { loading: boolean };

export default FolgenLoadable;