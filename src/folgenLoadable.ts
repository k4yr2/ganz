import { FolgenType } from "./folgenType";

export type FolgenLoadable<T> = FolgenType<T> & { loading: boolean };

export default FolgenLoadable;