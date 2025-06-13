import { FolgenType } from "./folgenType";

export type FolgenLoadable<T = any> = FolgenType<T, "loadable"> & { loading: boolean };

export default FolgenLoadable;